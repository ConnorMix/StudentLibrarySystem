import * as React from 'react';
import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button, Alert, InputAdornment} from "@mui/material";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const[firstName,setFirstName]=useState('')
    const[lastName,setLastName]=useState('')
    const[address,setAddress]=useState('')
    const[password,setPassword]=useState('')
    const[access, setAccess]=useState('Faculty/Staff')
    const[error, setError]=useState(null)
    const[success, setSuccess]=useState(null)
    const emailValidation = (e) => {
        var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        var addressValue = e.target.value
        setAddress(addressValue)
        if(address.match(pattern)){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }

    /*

(?=.{7, 25}$) Length of password should be between range 8 to 26

(?=.*[A-Z]) Password should contains a Capital letter

(?=.*\d) It should be alphanumeric so it should contain a digit

    const passwordValidation = (e) => {
        var pattern = /(?=.{7,25}$)(?=.*[A-Z])(?=.*\d)/
        var addressValue = e.target.value
        setAddress(addressValue)
        if(address.match(pattern)){
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
         */
    const accessLevel = [
        {
            value: 'Faculty/Staff',
            label: 'Faculty/Staff'
        },
        {
            value: 'Student',
            label: 'Student'
        }
    ];
    const handleclick = (e) => {
        e.preventDefault()
        const person = {firstName,lastName, address, password, access}
        console.log(person)
        fetch("http://localhost:8080/person/persons/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(person)
        }).then(res => {
            if (!res.ok) {
                if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{3,6}$/.test(person.address)){
                    throw Error("Invalid Email")
                }
                if(res.password) {
                    throw Error("Password must be >= 12 characters")
                }
                else {
                    throw Error('Email is already used')
                }
            }
            else if (res.ok) {
                setError(null)
                setSuccess(<Alert variant="filled" severity="success">
                    Student Successfully Added
                </Alert>)
            }

        }).catch(err => {
            setSuccess(null)
            setError(err.message)
        })
    }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:'blue'}}>Add Student</h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1, width: '25ch' },
                    }} noValidate autoComplete="off">

                    <TextField id="outlined-basic" label="Student First Name" variant="outlined" fullWidth
                               value={firstName}
                               onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Last Name" variant="outlined" fullWidth
                               value={lastName}
                               onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField InputProps={{endAdornment: (<InputAdornment position="end">
                            <ErrorOutlineIcon/>
                        </InputAdornment>)}}
                               id="outlined-basic" type="email" label="Student Email" variant="outlined" fullWidth
                               onChange={emailValidation}
                               value={address}
                    />
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" fullWidth
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic" className = "text-field" select label = "Access Level" variant="outlined" fullWidth
                        value={access}
                        onChange={(e) => setAccess(e.target.value)}
                        SelectProps={{
                            native: true,
                        }}
                    >{accessLevel.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                    </TextField>

                    <Button variant="contained" color="secondary" onClick={handleclick}>
                        Submit
                    </Button>

                </Box>
                {success && <div><h5>{ success }</h5></div>}
                {error && <div><h5>{ error }</h5></div>}
            </Paper>
        </Container>
    );
}

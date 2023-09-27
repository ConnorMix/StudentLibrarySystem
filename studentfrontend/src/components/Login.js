import * as React from 'react';
import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container, Paper, Button, Alert} from "@mui/material";
export default function Login(){
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
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
            const person = {address, password, access}
            console.log(person)
            // You can populate the address so Spring Boot can "getPerson()" by inserting variables like below.
            fetch("http://localhost:8080/person/persons/" + address + "/" + password, {
                method: "get",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"}
            }).then(res => {
             if(!res.ok) {
                 throw Error("Invalid Username And/Or Password")
             }
             else if (res.ok) {
                 setError(null)
                 setSuccess(<Alert variant="filled" severity="success">
                     Login Successfull
                 </Alert>)
                 window.location.replace('/');
             }
            }).catch(err => {
                setSuccess(null)
                setError(err.message)
            })


        }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:'blue'}}>Login</h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }} noValidate autoComplete="off">
            <TextField
                       id="outlined-basic" label="Student Email" variant="outlined" fullWidth
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
                Login
            </Button>

        </Box>
                {success && <div><h5>{ success }</h5></div>}
                {error && <div><h5>{ error }</h5></div>}
                </Paper>
            </Container>
    );
}

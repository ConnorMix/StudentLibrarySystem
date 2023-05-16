import * as React from 'react';
import {useState} from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Container , Paper, Button} from "@mui/material";

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600, margin:"20px auto"}
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[error, setError]=useState(null)

        const handleclick = (e) => {
            e.preventDefault()
            const student = {name, address}
            console.log(student)
            fetch("http://localhost:8080/student/add", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(student)
            }).then(res => {
                if (!res.ok) {
                throw Error('Invalid Email And/Or Name')
            }
                    console.log("New Student Added")
            }).catch(err => {
                setError(err.message)
            })
        }

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{color:'blue'}}><u>Add Student</u></h1>
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }} noValidate autoComplete="off">

            <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
            value={name}
                       onChange={(e) => setName(e.target.value)}
            />
            <TextField id="outlined-basic" label="Student Email" variant="outlined" fullWidth
            value={address}
                       onChange={(e) => setAddress(e.target.value)}
            />
            {error && <div><h4 style={{justifyContent: "center"}}>{ error }</h4></div> }
            <Button variant="contained" color="secondary" onClick={handleclick}>
                Submit
            </Button>
        </Box>
                </Paper>
            </Container>
    );
}

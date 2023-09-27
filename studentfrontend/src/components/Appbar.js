import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import { useLocation } from "react-router-dom";

export default function Appbar() {
    const location = useLocation();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        LOST(Library of Student Textbooks)
                    </Typography>
                    <Link style={{ pointerEvents: location.pathname === "/login" || "/" ? '' : 'none'}} to="add">
                        <Button id='login' color="inherit">Add Student</Button>
                    </Link>
                    <Link style={{ pointerEvents: location.pathname === "/" || "/add" ? '' : 'none'}} to="login">
                    <Button id='login' color="inherit">Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

import React from 'react';
import { Link } from 'react-router-dom'

function Nav(){
    return(
        <nav style={navStyles}>
            <img src="./images/Calen-Task.png" alt="logo" width="150" height="20" style={logoStyles}/>
            <ul>
                <li style={navList}>
                    <Link style={navLink} to="/">Home |</ Link>
                </li>
                <li style={navList}>
                    <Link style={navLink} to="/tasks">Tasks |</ Link>
                </li>
                <li style={navList}>
                    <Link style={navLink} to="/how-to">How To |</ Link>
                </li>
                <li style={navList}>
                    <Link style={navLink} to="/about">About </ Link>
                </li>
            </ul>
            <button style={loginModalStyles}>Login</button>
        </nav>
    )
}

const navStyles = {
    backgroundColor: 'white',
    color: '#63A583',
    display: 'flex',
    fontFamily: 'SeoulHangang',
    fontSize: '18px',
    justifyContent: 'space-around',
}

const logoStyles = {
    marginTop: '9px',
    padding: '5px'
}

const navList = {
    display: 'inline',
    padding: '5px'
}

const navLink = {
    color: '#63A583',
    textDecoration: 'none'
}

const loginModalStyles = {
    backgroundColor: '#63A583',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    margin: '10px',
    padding: '0px 15px 0px 15px'
}

export default Nav 
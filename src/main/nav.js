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
    justifyContent: 'space-around',
    fontFamily: 'SeoulHangang',
    fontSize: '18px'
}

const logoStyles = {
    padding: '5px',
    marginTop: '9px'
}

const navList = {
    display: 'inline',
    padding: '5px'
}

const navLink = {
    textDecoration: 'none',
    color: '#63A583'
}

const loginModalStyles = {
    backgroundColor: '#63A583',
    color: 'white',
    padding: '0px 15px 0px 15px',
    margin: '10px',
    border: 'none',
    borderRadius: '10px'
}

export default Nav 
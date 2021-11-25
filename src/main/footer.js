import React from 'react';
import { Link } from 'react-router-dom'

function footer(){
    return (
        <footer style={footerStyles}>
            <ul>
                <li style={footerList}>
                    <Link style={footerLink} to="/">Home |</ Link>
                </li>
                <li style={footerList}>
                    <Link style={footerLink} to="/tasks">Tasks |</ Link>
                </li>
                <li style={footerList}>
                    <Link style={footerLink} to="/how-to">How To |</ Link>
                </li>
                <li style={footerList}>
                    <Link style={footerLink} to="/about">About |</ Link>
                </li>
                <li style={footerList}>
                    <Link style={footerLink} to="/terms-of-service">Terms of Service |</ Link>
                </li>
                <li style={footerList}>
                    <Link style={footerLink} to="/privacy-policy">Privacy Policy </Link>
                </li>
            </ul>
        </footer>
    )
}

const footerStyles = {
    position: 'relative',
    backgroundColor: '#4477DC',
    color: 'white',
    fontSize: '18px',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center'
}

const footerList = {
    display: 'inline',
    padding: '5px'
}

const footerLink = {
    color: 'white',
    textDecoration: 'none'
}

export default footer
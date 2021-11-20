import React from 'react';
import { Link } from 'react-router-dom'
import '../css/nav.css'

function Nav(){
    return(
        <nav style={navStyles}>
            <img src="./images/Calen-Task.png" alt="logo" width="150" height="20" style={logoStyles}/>
            <ul>
                <li className="list">
                    <Link className="link" to="/">Home |</ Link>
                </li>
                <li className="list">
                    <Link className="link" to="/tasks">Tasks |</ Link>
                </li>
                <li className="list">
                    <Link className="link" to="/how-to">How To |</ Link>
                </li>
                <li className="list">
                    <Link className="link" to="/about">About </ Link>
                </li>
            </ul>
            <button style={btnStyles}>Login</button>
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

const btnStyles = {
    backgroundColor: '#63A583',
    color: 'white',
    padding: '0px 15px 0px 15px',
    margin: '10px',
    border: 'none',
    borderRadius: '10px'
}

export default Nav 
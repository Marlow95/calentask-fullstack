import React from 'react';
import '../css/nav.css'

function Nav(){
    return(
        <nav style={navStyles}>
            <img src="./images/Calen-Task.png" alt="logo" width="150" height="20" style={logoStyles}/>
            <ul>
                <li className="list">
                    <a>Home |</a>
                </li>
                <li className="list">
                    <a>Tasks |</a>
                </li>
                <li className="list">
                    <a>How-To |</a>
                </li>
                <li className="list">
                    <a>About </a>
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
    borderRadius: '10px',
    fontSize: '20px'
}

export default Nav 
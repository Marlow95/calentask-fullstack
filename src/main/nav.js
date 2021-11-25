import React, { useRef } from 'react';
import { Link } from 'react-router-dom'
import Modal from './modal';

function Nav(){
    const myModal = useRef(null)
    //Classes for login are re-used from homePage.css
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
            <button onClick={() => myModal.current.open()} style={modalBtnStyles}>Login</button>
            <Modal ref={myModal}>
                <h1>Login</h1>
                <hr />
                <form>
                    <label className="label">Username</label>
                    <br />
                    <input className="input-box" type="username" placeholder="Username"/>
                    <br />
                    <label className="label">Password</label>
                    <br />
                    <input className="input-box" type="password" placeholder="Password"/>
                    <br />
                    <input className="form-btn" type="submit" value="Login" />
                    <hr className="google-hr" />
                    <button className="google-btn">
                        <img className="google-icon" src="/images/google-icon.png" alt="google"/>
                        <span>Login w/ Google</span>
                    </button>
                </form>
            </Modal>
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

const modalBtnStyles = {
    backgroundColor: '#63A583',
    border: 'none',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    margin: '10px',
    padding: '0px 15px 0px 15px'
}

export default Nav 
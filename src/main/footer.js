import React from 'react';
import { Link } from 'react-router-dom'
import "../css/footer.css"

function footer(){
    return (
        <footer style={footerStyles}>
            <ul>
                <li className="list">
                    <Link className="link-footer" to="/">Home |</ Link>
                </li>
                <li className="list">
                    <Link className="link-footer" to="/tasks">Tasks |</ Link>
                </li>
                <li className="list">
                    <Link className="link-footer" to="/how-to">How To |</ Link>
                </li>
                <li className="list">
                    <Link className="link-footer" to="/about">About |</ Link>
                </li>
                <li className="list">
                    <Link className="link-footer" to="/terms-of-service">Terms of Service |</ Link>
                </li>
                <li className="list">
                    <Link className="link-footer" to="/privacy-policy">Privacy Policy </Link>
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
    flexDirection: 'left'
}

export default footer
import React from 'react';
import "../css/footer.css"

function footer(){
    return (
        <footer style={footerStyles}>
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
                    <a>About |</a>
                </li>
                <li className="list">
                    <a>Terms of Service |</a>
                </li>
                <li className="list">
                    <a>Privacy Policy </a>
                </li>
            </ul>
        </footer>
    )
}

const footerStyles = {
    position: 'relative',
    bottom: '1400px',
    backgroundColor: '#4477DC',
    color: 'white',
    fontSize: '18px',
    padding: '10px'
}

export default footer
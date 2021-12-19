import React, { useRef} from 'react';
import { Link } from 'react-router-dom'
import Modal from './modal';
import UserContext from '../UserContext';

function Nav(){
    const myModal = useRef(null)

    const {isLoggedIn, setIsLoggedIn} = React.useContext(UserContext)
    console.log(isLoggedIn)

    function login(event){
      setIsLoggedIn(prevLoginStatus => !prevLoginStatus)
      event.preventDefault()
      myModal.current.close()
    }

    const [showDropdown, setShowDropdown] = React.useState(false)

    function toggleDropdown(){
        console.log(showDropdown)
        setShowDropdown(toggle => !toggle)
    }

    function alertUser(){
        alert('You need to have an account to access this page')
    }

    return(
        <nav style={navStyles}>
            <img src="./images/Calen-Task.png" alt="logo" width="150" height="20" style={logoStyles}/>
            <ul>
                <li style={navList}>
                    {   isLoggedIn ? <Link style={navLink} to="/dashboard">Home </ Link> 
                        : <Link style={navLink} to="/">Home </ Link>
                    }
                </li>
                <li style={navList}>
                    { isLoggedIn ? <Link style={navLink} to="/tasks">Tasks </ Link> 
                        : <Link style={navLink} to="/" onClick={alertUser}>Tasks </ Link> 
                    }
                </li>
                <li style={navList}>
                    <Link style={navLink} to="/how-to">How To </ Link>
                </li>
                <li style={navList}>
                    <Link style={navLink} to="/about">About </ Link>
                </li>
            </ul>
            { 
                !isLoggedIn ?
                <button onClick={()=>myModal.current.open()} style={modalBtnStyles}>Login</button> 

                : <div style={profileIcon}>
                    <img src="/images/Group.png" alt="profile-icon" style={personIcon}/>
                    {showDropdown ? 
                    <div>
                    <img src="/images/dropdown.png" alt="dropdown-profile" style={dropdownIcon} onClick={toggleDropdown}/>
                    <div style={dropdownMenu}>
                        <ul style={dropdownContainer}>
                            <li style={dropdownList}><Link style={link} to="/dashboard">Dashboard</Link></li>
                            <hr />
                            <li style={dropdownList}><Link style={link} to="/settings">Settings</Link></li>
                            <hr />
                            <li onClick={login} style={dropdownList}>Logout</li>
                        </ul>
                    </div>
                    </div>
                    : 
                    <img src="/images/dropdown.png" alt="dropdown-profile" style={dropdownIcon} onClick={toggleDropdown}/>}
                  </div>

            }
            <Modal ref={myModal}>
                {/*form css --- reusable*/}
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
                    <button className="form-btn" onClick={login}>Login</button>
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

const profileIcon = {
    display: 'flex',
    justifyContent: 'space-around'
}

const personIcon = {
    position: 'relative',
    width: '40px',
    height: '40px',
    top: '10px',
    left: '12px'
}

const dropdownIcon = {
    position: 'relative',
    width: '20px',
    height: '20px',
    top: '20px',
    left: '20px'
}

const dropdownMenu = {
    backgroundColor: '#63A583',
    borderRadius: '10px',
    color: 'white',
    display: 'flex',
    height: '150px',
    justifyContent: 'center',
    position: 'absolute',
    top: '50px',
    width: '200px'
}

const dropdownContainer = {
    position: 'relative',
    right: '20px'
}

const dropdownList = {
    listStyle: 'none'
}

const link = {
    textDecoration: 'none',
    color: 'white'
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
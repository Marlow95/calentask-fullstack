import React, { useRef} from 'react';
import { Link, Redirect } from 'react-router-dom'
import Modal from './modal';
import UserContext from '../UserContext';
import Cookies from 'js-cookie';
import RouterLinks from "../constants/RouteLinks"

function Nav(){
    const myModal = useRef(null)

    const {isLoggedIn, setIsLoggedIn} = React.useContext(UserContext)

    function login(event){
      event.preventDefault()
      submitPostUsersApi()
    }

    function loginWithGoogle(event){
        event.preventDefault()
        loginWithGoogleApi()
    }
    
    React.useEffect(()=>{
        if(!isLoggedIn){
            const user = Cookies.get('sessionPersist')
            if(user){
            setIsLoggedIn(prevLoginStatus => !prevLoginStatus)
            }
        }
    })

    function logout(){
        Cookies.remove('sessionPersist')
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
        localStorage.removeItem("firstnameOfUser")
        setIsLoggedIn(prevLoginStatus => !prevLoginStatus)
    }

    const [showDropdown, setShowDropdown] = React.useState(false)

    function toggleDropdown(){
        setShowDropdown(toggle => !toggle)
    }

    const [loginInput, setLoginInput] = React.useState({
        username: '',
        password: ''
    })

    function getInputChange(event){
        const {name, value} = event.target
        setLoginInput(prevLoginInput => {
            return {
                ...prevLoginInput,
                [name]: value
            }
        })
    }

    function submitPostUsersApi(){
        fetch('https://localhost:7147/users/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'WWW-Authenticate': 'Bearer',
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify({
                userName: loginInput.username,
                passWord: loginInput.password
            })
            
        })
        .then(res => res.json())
        .then(data => { 
            
            if(data.isSuccess){
                Cookies.set('sessionPersist', 'fjghhfGDcv56Cs4e89', { expires: 1, sameSite: 'Strict', secure: true})
                localStorage.setItem("user", data.token)
                localStorage.setItem("userId", data.id)
                localStorage.setItem("firstnameOfUser", data.firstName)
                setIsLoggedIn(prevLoginStatus => !prevLoginStatus)
                myModal.current.close()
            } else {
                alert('Invalid username/password')
                return <Redirect to="/" />
            }
        })
        .catch(err => console.log(err))
    }

    function loginWithGoogleApi(){
        console.log('It works')
    }

    return(
        <nav style={navStyles}>
            <img src="./images/Calen-Task.png" alt="logo" width="150" height="20" style={logoStyles}/>
            <ul>
                <li style={navList}>
                    <Link style={navLink} to={RouterLinks.home}>Home </ Link>
                </li>
                <li style={navList}>
                    <Link style={navLink} to={RouterLinks.tasks}>Tasks </ Link> 
                </li>
                <li style={navList}>
                    <Link style={navLink} to={RouterLinks.howTo}>How To </ Link>
                </li>
                <li style={navList}>
                    <Link style={navLink} to={RouterLinks.about}>About </ Link>
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
                            <li style={dropdownList}><Link style={link} to={RouterLinks.dashboard}>Dashboard</Link></li>
                            <hr style={{color: 'white'}}/>
                            <li style={dropdownList}><Link style={link} to="/settings">Settings</Link></li>
                            <hr style={{color: 'white'}}/>
                            <li onClick={logout} style={dropdownList}><span style={link}>Logout</span></li>
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
                    <input className="input-box" type="username" placeholder="Username" name="username" onChange={getInputChange}/>
                    <br />
                    <label className="label">Password</label>
                    <br />
                    <input className="input-box" type="password" placeholder="Password" name="password" onChange={getInputChange}/>
                    <br />
                    <button className="form-btn" onClick={login}>Login</button>
                    <hr className="google-hr" />
                    <button className="google-btn">
                        <img className="google-icon" src="/images/google-icon.png" alt="google"/>
                        <span onClick={loginWithGoogle}>Login w/ Google</span>
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
    color: 'white',
    cursor: 'pointer'
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
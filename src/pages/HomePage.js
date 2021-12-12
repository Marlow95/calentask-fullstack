import React from 'react';
import { Link } from 'react-router-dom'
import "../css/HomePage.css"

function HomePage(){

    const [signUp, setSignUp] = React.useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    })
    

    function signupUser(event){
        const {name, value} = event.target
        setSignUp(prevSignUp => {
            return {
                ...prevSignUp,
                [name]: value
            }
        })
    }
    

    function submitSignup(event){
        event.preventDefault()
        submitApi()
    }

    
    function submitApi(){
        fetch('http://localhost:4000/users/signup', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstname: signUp.firstname,
                lastname: signUp.lastname,
                username: signUp.username,
                email: signUp.email,
                password: signUp.password
            })
            
        })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
    }
    

    return (
        <div className="content-container">
            <div className="jumbotron-container">
                <div className="jumbotron">
                    <h1>Never, Forget That Important Meeting Ever Again!</h1>
                    <hr />
                    <p>Combine your todo list with your Google Calender and your Mobile Phone, so that you can always remember your most important tasks through out the day!</p>
                    <button><Link className="jumbotron-link" to="/about">Learn More</Link></button>
                </div>
            </div>
            <div className="blob-container">
                <img className="blob" src="/images/Blob.png" alt="blob"/>
            </div>
            <div className="circle-container">
                <img className="white-circle" src="/images/White-Circle.png" alt="white-circle-graphic"/>
            </div>
            <div className="circle-container">
                <img className="green-circle" src="/images/Green-Circle.png" alt="green-circle-graphic"/>
            </div>
            <div className="signup-container">
                <form className="signup-form">
                    <label className="label">Email</label>
                    <br />
                    <input type="email" placeholder="Email" className="input-box" name="email" value={signUp.email} onChange={signupUser}/>
                    <br />
                    <label className="label">Username</label>
                    <br />
                    <input type="text" placeholder="Username" className="input-box" name="username" value={signUp.username} onChange={signupUser}/>
                    <br />
                    <label className="label">Password</label>
                    <br />
                    <input type="password" placeholder="Password" className="input-box" name="password" value={signUp.password} onChange={signupUser}/>
                    <br />
                    <label className="label">First Name</label>
                    <br />
                    <input type="text" placeholder="Firstname" className="input-box" name="firstname" value={signUp.firstname} onChange={signupUser}/>
                    <label className="label">Last Name</label>
                    <br />
                    <input type="text" placeholder="Lastname" className="input-box" name="lastname" value={signUp.lastname} onChange={signupUser}/>
                    <br />
                    <button onClick={submitSignup} className="form-btn">Sign Up</button>
                    <hr className="google-hr"/>
                    <button className="google-btn">
                        <img className="google-icon" src="/images/google-icon.png" alt="google"/>
                        <span>Sign Up w/ Google</span>
                    </button>
                </form>
            </div>
            <div className="quote-container">
                <div className="quote">
                    <blockquote>
                        <q><em>Calen Task has helped me manage my heptic schedule  as a Housing Locator</em></q>
                        <p>-Lisa Mason</p>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

export default HomePage
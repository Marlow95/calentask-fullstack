import React from 'react';
import "../css/homePage.css"

function HomePage(){
    return (
        <div>
            <div className="container">
                <div className="jumbotron">
                    <h1>Never, Forget That Important Meeting Ever Again!</h1>
                    <hr />
                    <p>Combine your todo list with your Google Calender and your Mobile Phone, so that you can always remember your most important tasks through out the day!</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div>
                <img className="blob" src="/images/Blob.png" alt="blob"/>
            </div>
            <div>
                <img className="white-circle" src="/images/White Circle.png" alt="white-circle-graphic"/>
            </div>
            <div>
                <img className="green-circle" src="/images/Green Circle.png" alt="green-circle-graphic"/>
            </div>
            <div className="form-container">
                <form className="signup-form">
                    <label className="label">Email</label>
                    <br />
                    <input type="email" placeholder="Email" className="input-box"/>
                    <br />
                    <label className="label">Username</label>
                    <br />
                    <input type="text" placeholder="Username" className="input-box"/>
                    <br />
                    <label className="label">Password</label>
                    <br />
                    <input type="password" placeholder="Password" className="input-box"/>
                    <br />
                    <label className="label">Full Name</label>
                    <br />
                    <input type="text" placeholder="Fullname" className="input-box"/>
                    <br />
                    <input type="submit" value="Sign Up" className="signup-btn" />
                    <hr className="google-hr"/>
                    <button className="google-btn"><i className="google-icon" src="/images/google.png" alt="google"/>Sign Up w/ Google</button>
                </form>
            </div>
            <div className="quote-container">
                <div className="quote">
                    <q>Calen Task has helped me manage my heptic schedule  as a Housing Locator</q>
                    <p>-Lisa Mason</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage
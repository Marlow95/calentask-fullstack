import React from 'react'

function Settings(){
    return(
        <div>
            <form >
                <label>Email</label>
                <br />
                <input type="email" placeholder="Email" name="email" />
                <br />
                <label>Username</label>
                <br />
                <input type="text" placeholder="Username" name="username"/>
                <br />
                <label>Password</label>
                <br />
                <input type="password" placeholder="Password" name="password"/>
                <br />
                <label>First Name</label>
                <br />
                <input type="text" placeholder="Firstname" name="firstname" />
                <br />
                <label>Last Name</label>
                <br />
                <input type="text" placeholder="Lastname" name="lastname"/>
                <br />
                <button>Save</button>
            </form>
        </div>
    )
}

export default Settings
import React from 'react';
import "../css/Dashboard.css"

function ProfileDashboard(){
    return (
        <div className="dashboard-page">
            <div className="page-container">
                <div>
                    <div className="dashboard-container">
                        <div className="profile-pic">
                            <img src="/images/Group-Large.png" alt="profile-pic" width="230px" className="profile-default"/>
                            <form>
                                <label htmlFor="upload-profile" className="profile-text"> Upload a Profile Photo: </label>
                                <br/>
                                <input type="file" id="upload-profile" name="upload-profile" />
                            </form>
                        </div>
                        <div className="profile-about">
                            <h1>About Me</h1>
                
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut elementum justo. 
                                Pellentesque sagittis pharetra eros sed convallis. In et odio vehicula, feugiat augue a, euismod leo. 
                                Suspendisse sagittis, lorem a rutrum lacinia, augue purus varius magna, eget sodales nunc ligula in neque. 
                                Cras tristique augue tellus, at blandit neque imperdiet a. Sed tempus sem sit amet dolor euismod, 
                                non vehicula diam scelerisque. Donec mollis lectus nec augue ullamcorper molestie. Ut felis leo, 
                                vehicula id purus id, sodales fringilla lorem. Sed iaculis, mi vel congue malesuada, tortor 
                                odio porta mi, quis venenatis arcu libero ac magna.
                            </p>
                        </div>
                    </div>
                    <div className="lower-dashboard-container">
                        <div className="dashboard-col-1">
                            <div className="child-col-greet">
                                <h1 className="greet-dashboard">Welcome Marlow</h1>
                                <h1>You’ve Got <span className="highlight">4 Tasks</span> To Complete <span className="highlight">By 10pm</span></h1>
                            </div>
                            <div className="child-col">
                                <button className="all-tasks-btn"><h2>Go To Tasks</h2></button>
                            </div>
                            <div className="child-col-upcoming">
                                <h3>Upcoming Tasks</h3>
                                <div>Task Goes Here</div>
                                <div className="upcoming-footer-container">
                                    <div className="upcoming-footer">
                                        <hr/>
                                        <h6>Upcoming Tasks</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-col-2">
                            <p>Tasks go here</p>
                            <div className="dash-col-footer-container">
                                <div className="dash-col-footer">
                                    <hr />
                                    <h6>Recently Added</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileDashboard
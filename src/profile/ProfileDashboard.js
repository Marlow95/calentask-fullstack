import React from 'react';
import { Link } from 'react-router-dom'
import "../css/Dashboard.css"

function ProfileDashboard(){
    return (
        <div className="dashboard-page">
            <div className="page-container">
                <div>
                    <div className="dashboard-container">
                        <img className="profile-pic-header" src="/images/rec.png" alt="green-background" height="150px" width="1260px"/>
                        <div className="profile-about">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut elementum justo. 
                                Pellentesque sagittis pharetra eros sed convallis. In et odio vehicula, feugiat augue a, euismod leo. 
                                Suspendisse sagittis, lorem a rutrum lacinia, augue purus varius magna, eget sodales nunc ligula in neque. 
                            </p>
                        </div>
                    </div>
                    <div className="lower-dashboard-container">
                        <div className="dashboard-col-1">
                            <div className="child-col-greet">
                                <h2 className="greet-dashboard">Welcome Marlow</h2>
                                <h2>You’ve Got <span className="highlight">4 Tasks</span> To Complete <span className="highlight">By 10pm</span></h2>
                            </div>
                            <div className="child-col">
                                <button className="all-tasks-btn"><h2><Link className="child-col-link" to="/tasks">Go To Tasks</Link></h2></button>
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
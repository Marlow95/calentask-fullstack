import React from 'react';
import {Switch, Route, Link } from 'react-router-dom'
import Settings from '../subpages/Settings'
import Avatar from '../subpages/Avatar'
import '../css/Settings.css'

function ProfileSettings(){
    return (
        <div className="dashboard-page">
            <div className="page-container">
                <div>
                    <div className="dashboard-container">
                        <img className="profile-pic-header" src="/images/rec.png" alt="green-background" height="170px" width="1260px"/>
                        <div className="profile-about">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut elementum justo. 
                                Pellentesque sagittis pharetra eros sed convallis. In et odio vehicula, feugiat augue a, euismod leo. 
                                Suspendisse sagittis, lorem a rutrum lacinia, augue purus varius magna, eget sodales nunc ligula in neque. 
                            </p>
                        </div>
                    </div>
                    <div className="settings-row">
                        <div className="settings-col-links">
                            <ul>
                                <li><Link to="/settings/settings-update">Settings</Link></li>
                                <li><Link to="/settings/avatar">Avatar</Link></li>
                            </ul>

                        </div>
                        <div className="settings-col-update-form">
                            <Switch>
                                <Route path="/settings/settings-update">
                                    <Settings/>
                                </Route>
                                <Route path="/settings/avatar">
                                    <Avatar/>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSettings
import React from 'react'
import Nav from './main/nav'
import HomePage from './pages/HomePage'
import Tasks from './pages/TaskPage'
import HowTo from './pages/HowToPage'
import About from './pages/AboutPage'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ProfileDashboard from './profile/ProfileDashboard'
import ProfileSettings from './profile/ProfileSettings'
import { Switch, Route, Redirect } from 'react-router-dom'
import Footer from './main/footer'
import UserContext from './UserContext'
import './App.css';
import './css/reusable/page.css'
import './css/reusable/form.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  return (
    <div className="App">
      <UserContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <Nav />
          <Switch>
            <Route exact path="/">
             { isLoggedIn ? <Redirect to="/dashboard" /> :<HomePage /> }
            </Route>
            <Route path="/tasks">
                { isLoggedIn ? <Tasks /> : <Redirect to="/" /> }
            </Route>
            <Route path="/how-to">
              <HowTo />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/terms-of-service">
              <TermsOfService />
            </Route>
            <Route path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route path="/dashboard">
              {!isLoggedIn ? <Redirect to="/" /> : <ProfileDashboard />}
            </Route>
            <Route path="/settings">
              {!isLoggedIn ? <Redirect to="/" /> : <ProfileSettings />}
            </Route>
          </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;

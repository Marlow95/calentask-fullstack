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
import RouterLinks from './constants/RouteLinks'
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
            <Route exact path={RouterLinks.home}>
             { isLoggedIn ? <Redirect to="/dashboard" /> : <HomePage /> }
            </Route>
            <Route path={RouterLinks.tasks}>
                { isLoggedIn ? <Tasks /> : <Redirect to={RouterLinks.home} /> }
            </Route>
            <Route path={RouterLinks.howTo}>
              <HowTo />
            </Route>
            <Route path={RouterLinks.about}>
              <About />
            </Route>
            <Route path={RouterLinks.tos}>
              <TermsOfService />
            </Route>
            <Route path={RouterLinks.pvypolicy}>
              <PrivacyPolicy />
            </Route>
            <Route path={RouterLinks.dashboard}>
              {!isLoggedIn ? <Redirect to={RouterLinks.home} /> : <ProfileDashboard />}
            </Route>
            <Route path={RouterLinks.settings}>
              {!isLoggedIn ? <Redirect to={RouterLinks.home} /> : <ProfileSettings />}
            </Route>
          </Switch>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;

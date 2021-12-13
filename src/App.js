import Nav from './main/nav'
import HomePage from './pages/HomePage'
import Tasks from './pages/TaskPage'
import HowTo from './pages/HowToPage'
import About from './pages/AboutPage'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ProfileDashboard from './pages/userPages/ProfileDashboard'
import ProfileSettings from './pages/userPages/ProfileSettings'
import { Switch, Route} from 'react-router-dom'
import Footer from './main/footer'
import './App.css';
import './css/reusable/page.css'
import './css/reusable/form.css'


function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/tasks">
              <Tasks />
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
          <Route>
            <PrivacyPolicy path="/privacy-policy"/>
          </Route>
          <Route path="/dasboard">
            <ProfileDashboard />
          </Route>
          <Route path="/profile-settings">
            <ProfileSettings />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;

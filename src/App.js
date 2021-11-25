import Nav from './main/nav'
import HomePage from './pages/homePage'
import Tasks from './pages/taskPage'
import HowTo from './pages/howToPage'
import About from './pages/aboutPage'
import TermsOfService from './pages/termsOfService'
import PrivacyPolicy from './pages/privacyPolicy'
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
          <Route>
            <TermsOfService />
          </Route>
          <Route>
            <PrivacyPolicy />
          </Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;

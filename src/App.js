import './App.css';
import CompNav from './component/CompNav'
import Home from './component/Home'
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import About from './component/About';
import Contact from './component/Contact';
import Alert from './component/Alert';
import Dmr from './component/Dmr';
import Appointment from './component/Appointment';
import Reminder from './component/Reminder';
import Billing from './component/Billing';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <Router>
        <CompNav />
        <Alert />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/dmr">
              <Dmr />
            </Route>
            <Route exact path="/appointment">
              <Appointment />
            </Route>
            <Route exact path="/reminder">
              <Reminder />
            </Route>
            <Route exact path="/billing">
              <Billing />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

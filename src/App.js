import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Login from './component/Login';
import Signup from './component/Signup';
import About from './component/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path='/'>
              <About />
            </Route>
            <Route exact path='/signup'>
              <Signup />
            </Route>
            <Route exact path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;

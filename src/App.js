import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddEvent from './Components/AddEvent/AddEvent';

function App() {
  return (
    
         <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/addEvent">Add Event</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/addEvent">
            <AddEvent/>
          </Route>
          <Route path="/dashboard">
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

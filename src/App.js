import logo from './logo.svg';
import './App.css';

//React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//Allow for rendering of different pages using React Router.
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import pages
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" render={(props) => (<Home {...props} current="home"/>)}/>
          <Route exact path="/portfolio" render={(props) => (<Portfolio {...props} current="portfolio"/>)}/>
          <Route exact path="/contact" render={(props) => (<Contact {...props} current="contact"/>)}/>
          <Route exact path="/resume" render={(props) => (<Resume {...props} current="resume"/>)}/>
          <Route component={Error}/> 
        </Switch>
      </div>
    </Router>
  );
}

export default App;

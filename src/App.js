import './scss/App.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;

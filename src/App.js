import './scss/App.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useState, useEffect } from 'react';

function App() {

  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.outerWidth);
    })
  }, [])
  
  return (
    <Router>
      <div className="App">
        {windowSize > 550 ? <Nav /> : ''}

        <Switch>
          <Route exact path="/">
            <Hero />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/work'>
            <Work />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

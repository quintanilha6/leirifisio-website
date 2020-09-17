import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Preloader from './components/layouts/Preloader';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Partnerships from './components/pages/Partnerships';
import ScrollToTop from './components/layouts/ScrollToTop';

function App() {
  return (
      <Router>
        { <Preloader />}
        <Switch>
        <ScrollToTop>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/partnerships' component={Partnerships} />
        </ScrollToTop>
        </Switch>
      </Router>
  );
}

export default App;

import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} /> {/*use to make a navigation need to put exact ! */}
        <Route path="/About" exact component={About} />
        <Route component={NotFound} /> {/*if the browser doesn't know the path, it will redirect on this page. That's the reason why we need to add exact to the other pages */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;

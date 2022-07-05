import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Welcome from './components/Welcome';
import Navigation from './components/Navigation';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.container}>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/calculator">
          <Calculator />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

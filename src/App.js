import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Home from'./pages/Home';
import './App.css';

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
  );
}

export default App;

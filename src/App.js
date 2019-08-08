import React from 'react';
import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import Home from'./pages/Home';
import MovieDetail from'./pages/MovieDetail';
import './App.css';

function App() {
  return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/movieDetail" component={MovieDetail}/>
        </Switch>
      </div>
  );
}

export default App;

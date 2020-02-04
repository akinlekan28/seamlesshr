import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

import Homepage from '../src/components/Homepage'
import SearchPage from './components/SearchPage';

class App extends Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Switch>
          <Route exact path="/search/:term" component={SearchPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;

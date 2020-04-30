import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import banner from '../images/banner.png';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <h1>Welcome to the Credit Landing Page</h1>
        <div className="row">
        <div className="banner">
          <img src={banner} width="100" height="50" />
        </div>
      </div>
          <NavBar />
          <Route name="home" exact path="/" component={HomePage} />
          <ul className="header">
            <h2>Purchase od $99+:</h2>
            <h2>No interest if paid full in 6 months on purchase of $99 or more</h2>
          </ul>
        </div>
      </Router>
    )
  }
}
export default App;

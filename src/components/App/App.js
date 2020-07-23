import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Search from '../Search/Search';
import GifList from '../GifList/GifList';

import Favorites from './../Favorites/Favorites'

class App extends Component {

  render() {
    return (
      <Router>
        <nav>
          <Link to = "/Favorites">Favorites</Link>
          <Link to = "/">Search</Link>
        </nav>
      <div>
        <h1>Giphy Search!</h1>
        <Route exact path="/" component={Search}/>
        <Route exact path="/Favorites" component={Favorites}/>
      </div>
      </Router>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);

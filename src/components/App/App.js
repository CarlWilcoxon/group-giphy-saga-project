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
          <Link path = "/Favorites">Favorites</Link>
        </nav>
      <div>
        <h1>Giphy Search!</h1>
        <Search />
        <GifList />
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

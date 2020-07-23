import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search';
import GifList from '../GifList/GifList';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search />
        <GifList />
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);

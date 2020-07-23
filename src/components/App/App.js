import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../Search/Search';


class App extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Search!</h1>
        <Search />
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(App);

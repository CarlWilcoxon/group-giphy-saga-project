import React, { Component } from 'react';
import { connect } from 'react-redux';


class Favorites extends Component {

  render() {
    return (
      <div>
        <h1>In favorites</h1>
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Favorites);

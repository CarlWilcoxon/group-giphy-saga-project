import React, { Component } from 'react';
import { connect } from 'react-redux';


class GifItem extends Component {

  render() {
    return (
      <li>
        <img src={this.props.gif.images.downsized.url} alt={this.props.gif.title} />
      </li>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(GifItem);

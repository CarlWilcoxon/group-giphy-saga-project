import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifItem from '../GifItem/GifItem';


class GifList extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Results!</h1>
        <ul>
          {this.props.reduxState.gifList.map( (gif) => <GifItem key={gif.id} gif={gif}/>)}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(GifList);

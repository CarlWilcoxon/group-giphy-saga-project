import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifItem from '../GifItem/GifItem';


class GifList extends Component {

  render() {
    return (
      <div>
        <h1>Giphy Results!</h1>
        <table>
          <tbody>
            {this.props.reduxState.gifList.map( (gif) => <GifItem key={gif.id} gif={gif}/>)}
          </tbody>
        </table>
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(GifList);

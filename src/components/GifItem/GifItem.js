import React, { Component } from 'react';
import { connect } from 'react-redux';


class GifItem extends Component {

  addFavorite = (event) =>{
    this.props.dispatch({type: 'ADD_FAVE', payload:
    {url: this.props.gif.images.downsized.url,
     description: this.props.gif.title,
     category_id: 2 //placeholder 2 = 'cohort'
    }})
  }

// url, description, category_id

  render() {
    return (
      <tr>
        <td>
          <img src={this.props.gif.images.downsized.url} alt={this.props.gif.title} />
        </td>
        <button onClick={this.addFavorite}>Favorite</button>
      </tr>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(GifItem);

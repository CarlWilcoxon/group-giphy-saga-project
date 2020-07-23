import React, { Component } from 'react';
import { connect } from 'react-redux';


class Favorites extends Component {

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_FAVE'})
  }

  render() {
    return (
      <div>
        <h1>In favorites</h1>
        {/* {JSON.stringify(this.props.reduxState.faveList)} */}
        <ul>
            {this.props.reduxState.faveList.map (item =>
                <li key = {item.id}> <img src={item.url} alt={item.description}/></li> )}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Favorites);

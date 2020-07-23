import React, { Component } from 'react';
import { connect } from 'react-redux';


class Search extends Component {

  // initialize the state
  state = {
    searchText: '',
  }

  // dispatch search string to server
  gifSearch = (event) => {
    event.preventDefault();
    console.log('in gifSearch searching for:', this.state.searchText)
    this.props.dispatch({type: 'SET_SEARCH', payload: this.state.searchText})
  }

  // textbox change handler
  changeHandle = (event) => {
    this.setState({
      searchText: event.target.value
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.gifSearch}>
          <input type="text" onChange={this.changeHandle}  value={this.state.searchText}/>
          <button type='submit' >Search</button>
        </form>
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Search);

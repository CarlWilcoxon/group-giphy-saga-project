import React, { Component } from 'react';
import { connect } from 'react-redux';


class Favorites extends Component {

  state = {
    gif_id: '',
    category_id: ''
  }

  componentDidMount(){
    this.props.dispatch({type: 'FETCH_FAVE'})
    this.props.dispatch({type: 'FETCH_CATEGORY'});
  }

  handleClick=(event)=>{
    console.log('state =', this.state);
    //dispatch state to put saga
    this.props.dispatch({type: 'PUT_CATEGORY', payload: this.state})
  }

  handleChange =(gif)=>(event) =>{
    this.setState({
      gif_id: gif,
      category_id: Number(event.target.value)
    })
  }//end handleChange


  render() {
    return (
      <div>
        <h1>In favorites</h1>
       {/*{JSON.stringify(this.props.reduxState.categoryList)}*/}
        <ul>
            {this.props.reduxState.faveList.map (gif =>
                <li key = {gif.id}>
                   <img src={gif.url} alt={gif.description}/>
                   <select name="category"
                    onChange={this.handleChange(gif.id)}>
                      {this.props.reduxState.categoryList.map(category =>
                        <option key = {category.id} value={category.id}>{category.name}</option>)}
                    </select>
                    <button onClick = {this.handleClick}>submit category</button>
                </li> )}
        </ul>
      </div>
    );
  }

}

const mapStateToProps = reduxState => ({
  reduxState,
});

export default connect(mapStateToProps)(Favorites);

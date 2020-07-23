import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import './favorites.css'

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
        <ul className = "fave">
            {this.props.reduxState.faveList.map (gif =>
                <li key = {gif.id}>
                   <img src={gif.url} alt={gif.description}/>
                   <br/>
                   <FormControl className="favoriteList">
                      <InputLabel>category</InputLabel>
                      <Select name="category"
                        id = "catSelect"
                        value = {this.state.category_id}
                        onChange={this.handleChange(gif.id)}>
                          {this.props.reduxState.categoryList.map(category =>
                            <option key = {category.id} value={Number(category.id)}>{category.name}</option>)}
                        </Select>
                    </FormControl>
                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                    <Button 
                      color = "primary"
                      variant ="outlined"
                      onClick = {this.handleClick}>
                      change category
                    </Button>
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

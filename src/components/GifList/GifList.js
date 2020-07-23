import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifItem from '../GifItem/GifItem';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
// import tileData from './tileData';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 'auto',
    height: 'auto',
  },
});

class GifList extends Component {

  addFavorite = (event) =>{
    this.props.dispatch({type: 'ADD_FAVE', payload:
    {url: this.props.gif.images.downsized.url,
     description: this.props.gif.title,
     category_id: 2 //placeholder 2 = 'cohort'
    }})
  }

  render() {
    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={'auto'} className={classes.gridList} cols={0}>
          {this.props.reduxState.gifList.map(tile => (
            <GridListTile key={tile.id} cols={tile.cols || 1}>
              <img src={tile.images.downsized.url} alt={tile.title} />
              <Button onClick={tile.addFavorite} >Favorite</Button>
            </GridListTile>
          ))}
        </GridList>
      </div>
    );

  }

}

GifList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = reduxState => ({
  reduxState,
});

export default withStyles(styles)(connect(mapStateToProps)(GifList));


// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 500,
//     height: 450,
//   },
// });

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
// function ImageGridList(props) {
//   const { classes } = this.props;

//   return (
//     <div className={classes.root}>
//       <GridList cellHeight={160} className={classes.gridList} cols={3}>
//         {tileData.map(tile => (
//           <GridListTile key={tile.img} cols={tile.cols || 1}>
//             <img src={tile.img} alt={tile.title} />
//           </GridListTile>
//         ))}
//       </GridList>
//     </div>
//   );
// }



// export default withStyles(styles)(ImageGridList);
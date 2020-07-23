const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  const queryString = `SELECT * FROM "favorite"`;
  pool.query(queryString)
  .then((result)=>{res.send(result.rows)})
  .catch((error)=>{console.log('GET error:', error)})
});

// add a new favorite 
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log( 'in Put', req.body, req.params.favId);
  // update first name of the bird with this ID
  const queryString = `UPDATE favorite SET category_id='${ req.body.category_id}' WHERE id=${ req.params.favId };`;
  pool.query( queryString ).then( ( results )=>{
      res.sendStatus( 200 );
  }).catch( ( err )=>{
      console.log( err );
      res.sendStatus( 500 );
  })
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

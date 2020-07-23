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

  console.log('Logging req:', req.body.payload);
  const queryString = `INSERT INTO "favorite" ("url", "description", "category_id")
                          VALUES( $1, $2, $3 )`;

  const queryValues = [
    req.body.payload.url,
    req.body.payload.description,
    req.body.payload.category_id];

  pool.query(queryString, queryValues)
  .then((result)=>{res.sendStatus(201)})
  .catch((error)=>{console.log('POST error:', error)})


});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;

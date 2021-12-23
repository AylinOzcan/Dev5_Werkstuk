const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const db = require('./models');

const app = express();
const PORT = 3000;

//db.sequelize.sync();
//for development purposes
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

// const pg = require('pg');
// pg.connect('postgres://postgres:password@localhost:5432/development5_db');

/**
 * [GET] /
 * @returns {String} containing 'Hello world'
 */
 app.get(`/`, (req, res) => {
  res.send(`Hello world`)
})

/**
 * [GET] /client by id
 * @returns {Object} client from list clients
 */
 app.get(`/client/:id`, (req, res) => {
  let id = req.query.id;

  getClient(id);
  console.log(client)

  res.json(client);
})


/**
 * [POST] /clients
 * @returns {Array} clients of objects
 */

 app.post(`/clients`, (req, res) => {
  let clients = req.body;
  res.send(clients)
})

/**
 * [DELETE] /client
 */
app.delete('/client.:id', (req, res) => {
  let id = req.query.id;
  getClient(id);
  //get client id and delete from list 
})

/**
 * [UPDATE] /client by id
 * @returns {Object} client with modifications
 */

app.put('/client/:id', (req, res) => {
  let id = req.query.id;
  let update = req.body; //(? or param)
  
  getClient(id);
  console.log(client)
      
  function updateClient (c){
    c.name = update.name;
    c.email = update.email;
  }

  updateClient(client);
  res.json(client);
})

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
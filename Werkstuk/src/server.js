const express = require("express");
const app = express();
const PORT = 3000;


const clients = [{
  id: 0,
  name: `Aylin Özcan`,
  email: `aylin.ozcan@student.ehb.be`
}, {
  id: 1,
  name: `Doctor Who`,
  email: `doctorw@tardis.com`
}];

/**
 * [GET] /
 * @returns {String} containing 'Hello world'
 */
app.get(`/`, (req, res) => {
  res.send(`Hello world`)
})

//app.use(`/api`);

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
app.update('/client/:id', (req, res) => {
  let id = req.query.id;
  let update = req.body; //(? or param)
  
  getClient(id);
  console.log(client)
      
  function getUpdate (c){
    c.name = update.name;
    c.email = update.email;
  }

  getUpdate(client);
  res.json(client);
})

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});

/**
 * [FUNCTION] getClient
 * @param {*} id 
 * @returns client with correspended id
 */
function getClient (id) {
  for(let client in clients){
    if(id == client[id]){
      return client;
    }
  }
}
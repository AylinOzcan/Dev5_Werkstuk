const express = require("express");
//const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

/*
const clients = [{
  id: 0,
  name: `Aylin Özcan`,
  email: `aylin.ozcan@student.ehb.be`
}, {
  id: 1,
  name: `Doctor Who`,
  email: `doctorw@tardis.com`
}];
*/


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

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});

/**
 * [FUNCTION] getClient
 * @param {*} id 
 * @returns client with correspended id
 */
/*
function getClient (id) {
  for(let client in clients){
    if(id == client[id]){
      return client;
    }
  }
}
*/
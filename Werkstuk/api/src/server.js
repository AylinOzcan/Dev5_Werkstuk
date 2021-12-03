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
 * CRUD, 
 */

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
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
 * CRUD, 
 */

app.listen(PORT, () => {
  console.log(`app listening at port ${PORT}`);
});
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
require("dotenv").config();

const port = process.env.PORT;
const app = express();
const productRoutes = require('./src/components/products/productRoutes')
const initDB = require("./src/config/db");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//database initialization
initDB();


app.use('/products',productRoutes)

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

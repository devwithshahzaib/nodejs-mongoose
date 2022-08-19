const mongoose = require("mongoose");

const initDB = () => {
  console.log("process.env.DB", process.env.DB);
  mongoose.connect(process.env.DB, (err) => {
    if (err) throw err;
    console.log("Successfuly connected with database");
  });
};

module.exports = initDB;
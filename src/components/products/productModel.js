const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  price: {
    requires: true,
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const productModel = mongoose.model("products",productSchema)
module.exports = productModel;
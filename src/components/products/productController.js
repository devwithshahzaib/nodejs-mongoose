const productModel = require("./productModel");

// method for fetching/reading/getting products from db

const getProducts = async (req, res) => {
  try {
    //trying to fetch data from database

    const products = await productModel.find();
    console.log("products", products);

    //if products find from db successfully

    let response = {
      status: 200,
      message: "products fetched successfully",
      data: products,
    };
    res.json(response);
  } catch (err) {
    //if products doesn't found

    let response = {
      status: 201,
      message: err,
    };
    res.json(response);
  }
};

// method for creating/posting/adding new products to db

const createProduct = async (req, res) => {
  //validating request
  if (!req.body.title || !req.body.price || !req.body.description) {
    let response = {
      status: 401,
      message: "params, title, price, description are required!",
    };
    res.json(response);
  }

  //data from user/frontend load here
  const newProduct = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    cratedAt: new Date(),
  };

  const product = new productModel(newProduct);

  try {
    let productToBeAdded = await product.save();
    let response = {
      status: 201,
      message: "Product Created Successfully",
      productInfo: productToBeAdded,
    };
    res.json(response);
  } catch (err) {
    let response = {
      status: 401,
      message: err,
    };
    res.json(response);
  }
};

//Method for updating/PUT existing product

const updateProduct = async (req, res) => {
  if (!req.body.title || !req.body.price || !req.body.description) {
    let response = {
      status: 401,
      message: "params, title, price, description are required!",
    };
    res.json(response);
  }
  const updateProduct = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    createdAt: new Date(),
  };

  console.log("req.params.id", req.params.id);

  try {
    let updatedProduct = await productModel.updateOne(
      { _id: req.params.id },
      updateProduct
    );
    let response = {
      status: 200,
      message: "product updated successfully",
      updatedProduct: updatedProduct,
    };
    res.json(response);
  } catch (err) {
    let response = {
      status: 401,
      message: err,
    };
    res.json(response);
  }
};

const deleteProduct = async (req, res) => {
  // if(!req.query.id){
  // logic
  // }
  try {
    let deletedProduct = await productModel.deleteOne({ _id: req.query.id });
    let response = {
      status: 200,
      message: "product deleted sucessfully",
      deletedProduct: deletedProduct,
    };
    res.json(response)
  } catch (error) {
    let response = {
      status: 401,
      message: error,
    };
    res.json(response);
  }
};
module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};

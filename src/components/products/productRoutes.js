const router = require("express").Router();
const productController = require("./productController");

router.get("/", (req,res)=>{
    res.send("Server is Working fine")
});
router.get("/getProducts", productController.getProducts);
router.post("/createProduct", productController.createProduct);
router.put("/updateProduct/:id", productController.updateProduct);
router.delete("/deleteProduct", productController.deleteProduct);

module.exports = router;

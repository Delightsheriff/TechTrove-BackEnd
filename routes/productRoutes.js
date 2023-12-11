const express = require("express");
//importing api functions
const {
  getAllProducts,
  getOneProduct,
  addOneProduct,
  updateOneProduct,
  deleteOneProduct,
} = require("../controllers/productsCtrl");
//

const router = express.Router();

// API ENDPOINTS
router.get("/all-products", getAllProducts);
router.get("/product/:id", getOneProduct);
router.post("/product", addOneProduct);
router.put("/product/:id", deleteOneProduct);
router.delete("/product/:id", updateOneProduct);

module.exports = router;

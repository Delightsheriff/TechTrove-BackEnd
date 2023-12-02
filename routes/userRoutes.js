const express = require("express");
const {
  getAllUsers,
  usersignUp,
  userLogin,
} = require("../controllers/userCtrl");

const router = express.Router();

router.get("/all-students", getAllUsers);

router.post("/register", usersignUp);

router.post("/login", userLogin);

module.exports = router;

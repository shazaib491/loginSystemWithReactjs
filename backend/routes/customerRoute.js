const express = require("express");
const router = express.Router();
const { addCustomer,getCustomer } = require("./../controller/customer");
const auth = require("./../middlewares/auth");

router.post("/", auth, addCustomer)
router.get("/", auth, getCustomer)

module.exports = router;
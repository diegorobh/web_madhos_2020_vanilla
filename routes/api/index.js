const express = require("express");
const router = express.Router();
const documentsRoute = require("./documents");
const areasRoute = require("./areas");

router.use("/documents",  documentsRoute);
router.use("/areas",  areasRoute);

module.exports = router;
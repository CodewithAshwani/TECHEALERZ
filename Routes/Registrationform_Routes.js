const express = require("express");
const router = express.Router();
const registerformsdata = require("../Controllers/Registerform_Controller");

router.post("/data", registerformsdata.registerform_controller);
router.get("/alldata", registerformsdata.getAllRegisterData);

module.exports = router;

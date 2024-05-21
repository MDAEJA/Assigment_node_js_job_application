const express = require("express");
const router = express.Router();
const jobController = require("../controller/job_controller")

// create first api 

router.post("/api/jobs",jobController.createJobProfile)

router.get("/api/jobs",jobController.listJobProfile)

router.put("/api/jobs/:id",jobController.updateJobProfile)

router.delete("/api/jobs/:id",jobController.deleteJobProfile)



module.exports = router;
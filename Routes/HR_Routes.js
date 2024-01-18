const express = require('express');
const router = express.Router();
const hrController = require('../Controllers/HR_Controller');


// Create a new job
router.post('/createJob', hrController.Create_job_controller);

// Get all jobs
router.get('/getJobs', hrController.Get_jobs_controller);

// Get a job by its id
router.get('/getJob/:id', hrController.Get_job_by_id_controller);

// Update a job
router.put('/updateJob/:id', hrController.Update_job_controller);

// Delete a job
router.delete('/deleteJob/:id', hrController.Delete_job_controller);

module.exports = router;

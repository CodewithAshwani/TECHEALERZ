const HrModel = require("../Models/HR_Model");

// Controller function to create a new job
module.exports.Create_job_controller = async (req, res) => {
  try {
    const { jobTitle, jobDescription, experience, role, numberOfOpenings } =
      req.body;
    const newJob = await HrModel.create({
      jobTitle,
      jobDescription,
      experience,
      role,
      numberOfOpenings,
    });
    res.status(201).json({ jobData: newJob });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to retrieve all jobs
module.exports.Get_jobs_controller = async (req, res) => {
  try {
    const jobs = await HrModel.find();
    res.status(200).json({ jobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Controller function to get a job by ID
module.exports.Get_job_by_id_controller = async (req, res) => {
    try {
        
        const job = await HrModel.findById(req.params.id);
        if (!job) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json({ job });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Controller function to update a job
module.exports.Update_job_controller = async (req, res) => {
  try {
    const { jobTitle, jobDescription, experience, role, numberOfOpenings } =
      req.body;
    const updatedJob = await HrModel.findByIdAndUpdate(
      req.params.id,
      { jobTitle, jobDescription, experience, role, numberOfOpenings },
      { new: true }
    );
    res.status(200).json({ jobData: updatedJob });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to delete a job
module.exports.Delete_job_controller = async (req, res) => {
  try {
    const deletedJob = await HrModel.findByIdAndDelete(req.params.id);
    if (!deletedJob) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

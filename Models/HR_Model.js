const mongoose = require('mongoose');

const HrSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['PLM Consultant','developer', 'manager', 'designer', 'otherRoles'], // Adjust roles as needed
    default: 'developer',
  },
  numberOfOpenings: {
    type: Number,
    required: true,
  },
});

const HrModel = mongoose.model('Job', HrSchema);

module.exports = HrModel;

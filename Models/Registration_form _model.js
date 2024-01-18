const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Registerform = new schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
  },
  Email: {
    type: String,
    required: true,
  },
  PhoneNumber: {
    type: Number,
    required: true,
  },
  CurrentCompany: {
    type: String,
  },
  TotalExperience: {
    type: Number,
    required: true,
  },
  CurrentCTC: {
    type: String,
  },
  ExpectedCTC: {
    type: String,
  },

  PortfolioLink: {
    type: String,
  },
  CurrentLocation: {
    type: String,
  },
  NoticePeriod: {
    type: Number,
  },
});

const Registerforms = mongoose.model("Registerform_Data", Registerform);
module.exports = Registerforms;

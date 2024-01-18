const Registerform = require("../Models/Registration_form _model");
module.exports.getAllRegisterData = async (req, res) => {
    try {
        const allRegisterData = await Registerform.find();
        res.status(200).json({ Data: allRegisterData });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports.registerform_controller = async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      CurrentCompany,
      TotalExperience,
      CurrentCTC,
      ExpectedCTC,
      ResumeUpload,
      PortfolioLink,
      CurrentLocation,
      NoticePeriod
    } = req.body;

    const RegisterData = await Registerform.create({ FirstName,
        LastName,
        Email,
        PhoneNumber,
        CurrentCompany,
        TotalExperience,
        CurrentCTC,
        ExpectedCTC,
        ResumeUpload,
        PortfolioLink,
        CurrentLocation,
        NoticePeriod });
    res.status(201).json({ Data: RegisterData });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

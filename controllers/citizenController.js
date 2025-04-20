const Citizen = require('../models/Citizen');
const File = require('../models/File');

exports.getAllCitizens = async (req, res) => {
  try {
    const citizens = await Citizen.find();
    res.json(citizens);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createCitizen = async (req, res) => {
  try {
    const citizen = new Citizen(req.body);
    await citizen.save();
    res.status(201).json(citizen);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateCitizen = async (req, res) => {
  try {
    const citizen = await Citizen.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(citizen);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCitizen = async (req, res) => {
  try {
    await Citizen.findByIdAndDelete(req.params.id);
    res.json({ message: 'Citizen deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getCitizenFiles = async (req, res) => {
  try {
    const files = await File.find({ citizen: req.params.id }); // ✅ correct field
    res.json(files);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



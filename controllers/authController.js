// Existing imports
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const HospitalStaff = require('../models/HospitalStaff');

// LOGIN function (already working — do not change)
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const staff = await HospitalStaff.findOne({ email });
    if (!staff) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, staff.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign(
      { id: staff._id, email: staff.email, role: staff.role },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.json({
      token,
      user: {
        id: staff._id,
        name: staff.name,
        role: staff.role,
        email: staff.email
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// NEW: REGISTER function (add this directly below login)
exports.register = async (req, res) => {
  try {
    const { email, password, name, hospitalName, role } = req.body;

    const existingUser = await HospitalStaff.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new HospitalStaff({
      email,
      password: hashedPassword,
      name,
      hospitalName,
      role: role || 'staff'
    });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};
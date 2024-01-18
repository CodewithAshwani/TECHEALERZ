// const { only } = require('node:test');
const bcrypt = require('bcrypt');
const User = require('../Models/User_Model');
const jwt=require('jsonwebtoken');

const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    await User.create({ username, password });
    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) return res.status(401).json({ success: false, message: 'Invalid credentials' });

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = jwt.sign({ username }, 'secret');
    res.cookie('jwttoken', token, { httpOnly: true });
    res.status(200).json({ success: true, token });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ..

const logout = (req, res) => {
  // Dummy function, as logout doesn't typically involve server-side operations
  res.status(200).json({ success: true, message: 'User logged out successfully' });
};

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createUser, login, logout ,getAllUsers};

const express = require('express');
const router = express.Router();
const userController = require('../Controllers/User_Controller');

// Create a new user
router.post('/createUser', userController.createUser);

// Login user
router.post('/login', userController.login);

// Logout user
router.post('/logout', userController.logout);

// Get all users
router.get('/getAllUsers', userController.getAllUsers);

module.exports = router;

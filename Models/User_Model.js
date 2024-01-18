// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true,
//         unique: true, // Ensures usernames are unique
//         trim: true,   // Trims any whitespaces from the beginning and end
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// });

// const User = mongoose.model('User', userSchema);

// module.exports = User;

///
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  // Hash the password only if it's modified or a new user
  if (!this.isModified('password')) return next();

  try {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
  } catch (error) {
    return next(error);
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user and get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Find user by email
  const user = await User.findOne({ email: email })

  // check if user exist
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      tokne: null,
    })
  } else {
    res.status(410)
    throw new Error('Invalid email or password')
  }
})

export { authUser }

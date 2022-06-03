const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/Users.js')
const config = require('config')
const router = Router()

router.post(
  '/register',
  [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length is 6 characters')
      .isLength({ min: 6}),

  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid registration data!'
        })
      }

      const { email, password, name, surname } = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        res.status(400).json({ message: 'Such user already existing!'})
      }

      const hashedPassword = await bcrypt(password, key)
      const user = new User({ email, password: hashedPassword, name, surname})
      
      await user.save()

      res.status(201).json({message: 'User was created'})

    } catch (error) {
      res.status(500).json({ message: 'Something go wrong! Please, try again'})
    }
})

router.post(
  '/login',
  [
    check('email', 'Enter correct email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists()
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req)
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Invalid login data!'
        })
      }
  
      const { email, password } = req.body
  
      const user = await User.findOne({ email})

      if (!user) {
        return res.status(400).json({ message: 'User is not found!'})
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password! Please, try again'})
      }

      const token = jwt.sign(
        { 
          userId: user.id,
          userMail: user.email
        },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )

      res.json({ token, userId: user.id })
  
    } catch (error) {
      res.status(500).json({ message: 'Something go wrong! Please, try again'})
    }
})


module.exports = router
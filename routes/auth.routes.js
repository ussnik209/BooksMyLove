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
    check('mail', 'Incorrect email').isEmail(),
    check('password', 'Minimum password length is 6 characters')
      .isLength({ min: 6}),
    check('name', 'Missing required field name').exists({checkFalsy: true}),
    check('surname', 'Missing required field surname').exists({checkFalsy: true})
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
      const { mail, password, name, surname } = req.body

      const candidate = await User.findOne({ mail })

      if (candidate) {
        return res.status(400).json({ message: 'Such user already existing!'})
      }
      
      const key = config.get('auth').key
      const hashedPassword = await bcrypt.hash(password, key)
      const user = new User({ mail, password: hashedPassword, name, surname})
      
      await user.save()
      
      return res.status(201).json({message: 'User was created', success: true})
      
    } catch (e) {
      return res.status(500).json({ message: e.message})
    }
})

router.post(
  '/login',
  [
    check('mail', 'Enter correct email').normalizeEmail().isEmail(),
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
  
      const { mail, password } = req.body
  
      const user = await User.findOne({ mail})

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
          userMail: user.mail
        },
        config.get('auth').jwtSecret,
        { expiresIn: '1h' }
      )

      return res.json({ token, userId: user.id })
  
    } catch (e) {
      return res.status(500).json({ message: e.message})
    }
})


module.exports = router
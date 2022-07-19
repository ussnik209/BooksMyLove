const { Router } = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/Users.js')
const Admin = require('../models/Admin.js')
const config = require('config')
const { create } = require('../models/Users.js')
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

      const admin = await Admin.findOne({ mail })
      const user = await User.findOne({ mail })

      const verificationResult = await verifyUser(admin || user, password)

      if (!verificationResult.isVerified) {
        return res.status(400).json({message: verificationResult.message})
      }

      const token = createToken(admin || user)

      return res.json({token, userId: admin ? admin.id : user.id, isAdmin: !!admin})        
    } catch (e) {
      return res.status(500).json({ message: e.message})
    }
})

const verifyUser = async (user, password) => {
      if (!user) {
        return { message: 'User is not found!', isVerified: false}
      }

      const isMatch = await bcrypt.compare(password, user.password)

      if (!isMatch) {
        return { message: 'Invalid password! Please, try again', isVerified: false }
      }

      return { isVerified: true }
}

const createToken = (user) => {
  return jwt.sign(
    { 
      userId: user.id,
      userMail: user.mail
    },
    config.get('auth').jwtSecret,
    { expiresIn: '1h' }
  )
}

module.exports = router
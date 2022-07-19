const Admin = require('../models/Admin.js')

module.export = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
   const userMail = req.user.mail

    if (!Admin.find(userEmail)) {
      return res.status(403).json({ message: 'Not admin' })
    }

    next()
  } catch (e) {
    res.status(403).json({ message: 'Not admin' })
  }
}
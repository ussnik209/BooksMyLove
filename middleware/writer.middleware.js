const User = require('../models/Users.js')

module.export = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next()
  }

  try {
    const isAuthor = User.find(req.user.mail).isAuthor

    if (!isAuthor) {
      return res.status(403).json({ message: 'Not author' })
    }

    next()
  } catch (e) {
    res.status(403).json({ message: 'Not author'})
  }
}
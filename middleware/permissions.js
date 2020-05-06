const jwt = require('jsonwebtoken')

require('dotenv').config()

const permissions = {
  isAuthenticated: (req, res, next) => {
    const userToken = req.headers.authorization

    try {
      const user = jwt.verify(userToken, process.env.SECRET)

      if (user) {
        next()
      } else {
        res.status(401).send({data: 'please provide an authentication token'})
      }
    } catch (error) {
      res.status(401).send({data: 'please provide an authentication token'})
    }
  }, 
  isAdmin: (req, res, next) => {
    const userToken = req.headers.authorization

    try {
      const user = jwt.verify(userToken, process.env.SECRET)

      if(user && user.role_id === 1) {
        next()
      } else {
        res.status(401).send({data: 'please provide an authentication token'})
      }
    } catch (error) {
      res.status(401).send({data: 'please provide an authentication token'})
    }
  },
  isTutor: (req, res, next) => {
    const userToken = req.headers.authorization

    try {
      const user = jwt.verify(userToken, process.env.SECRET)

      if(user && user.role_id === 2) {
        next()
      } else {
        res.status(401).send({data: 'please provide an authentication token'})
      }
    } catch (error) {
      res.status(401).send({data: 'please provide an authentication token'})
    }
  }
}

module.exports = permissions

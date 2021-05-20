const db = require('./config/database')
const jwt = require('jsonwebtoken')

module.exports = {
  register: async (req, res) => {
    const { username, password, full_name } = req.body
    const regisUser = await db.userModel.create({
      username,
      password,
      full_name
    })
    res.send({
      status: 200,
      error: null,
      data: regisUser
    })
  },
  login: async (req, res) => {
    const { username, password } = req.body

    const userProfile = await db.userModel.findAll({ where: { username: username } })
    const savedPassword = userProfile.password

    if (savedPassword !== password) {
      const message = 'wrong password!'
    }

    const token = jwt.sign(JSON.stringify(userProfile), process.env.SECRET_KEY_TOKEN)

    res.send({
      status: 200,
      message: 'Welcome!',
      name: username,
      token: token
    })
  },
  userDetail: async (req, res) => {
    const id = req.query.id

    const userDetail = await db.userModel.findOne({ where: { id: id } })

    res.send({
      status: 200,
      message: 'USER DETAILS',
      data: userDetail
    })
  }
}

const express = require('express')
const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')

const db = require('./config/database')

const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.post('/register', async (req, res) => {
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
})

app.post('/login', async (req, res) => {
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
})

app.get('/user', async (req, res) => {
  const id = req.query.id

  const userDetail = await db.userModel.findOne({ where: { id: id } })

  res.send({
    status: 200,
    message: 'USER DETAILS',
    data: userDetail
  })
})

app.post('/post/listing', async (req, res) => {
  const { product_name, product_desc, seller_id, is_sold } = req.body
  const addListing = db.listingModel.create({
    product_name, product_desc, seller_id, is_sold
  })

  res.send({
    status: 200,
    data: addListing,
    message: 'successfuly added'
  })
})

app.get('/user/listing', async (req, res) => {
  const id = req.query.id

  const findListingBySeller = await db.listingModel.findAll({ where: { seller_id: id } })

  res.send({
    status: 200,
    data: findListingBySeller
  })
})

app.get('/user/listing', async (req, res) => {
  const sold = req.query.sold

  const findSoldItem = await db.listingModel.findAll({ where: { is_sold: sold } })

  res.send({
    status: 200,
    data: findSoldItem
  })
})

app.listen(PORT, () => {
  console.log(`Express is running on port http://localhost:${PORT}`)
})

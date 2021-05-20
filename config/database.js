const Sequelize = require('sequelize')
require('dotenv').config()

const UserModel = require('../models/users')
const ListingModel = require('../models/listings')

const { USERNAME_DB, PASSWORD_DB, HOST_DB } = process.env

const sequelize = new Sequelize('data-automa', USERNAME_DB, PASSWORD_DB, {
  host: HOST_DB,
  dialect: 'postgres'
})

sequelize
  .authenticate()
  .then((res) => {
    console.log('CONNECTION_SUCCESS')
  })
  .catch((err) => console.log('FAILED_TO_CONNECT', err))

const userModel = UserModel(sequelize, Sequelize)
const listingModel = ListingModel(sequelize, Sequelize)

module.exports = {
  sequelize,
  userModel,
  listingModel
}

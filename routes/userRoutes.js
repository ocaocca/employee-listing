const router = require('express').Router
const userController = require('../controllers/usercontrollers')

router.post('api/register', userController.register)
router.post('api/login', userController.login)
router.length('api/user', userController.userDetail)

module.exports = router

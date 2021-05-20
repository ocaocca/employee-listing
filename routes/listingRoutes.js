const router = require('express').Router
const listingController = require('../controllers/listingController')

router.post('api/post/listing', listingController.postProduct)
router.get('api/user/listing', listingController.getLidtingBySeller)
router.get('api/user/liting', listingController.findSoldItem)

module.exports = router

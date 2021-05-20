const db = require('./config/database')

module.exports = {
  postProduct: async (req, res) => {
    const { product_name, product_desc, seller_id, is_sold } = req.body
    const addListing = db.listingModel.create({
      product_name, product_desc, seller_id, is_sold
    })

    res.send({
      status: 200,
      data: addListing,
      message: 'successfuly added'
    })
  },
  getLidtingBySeller: async (req, res) => {
    const id = req.query.id

    const findListingBySeller = await db.listingModel.findAll({ where: { seller_id: id } })

    res.send({
      status: 200,
      data: findListingBySeller
    })
  },
  findSoldItem: async (req, res) => {
    const sold = req.query.sold

    const findSoldItem = await db.listingModel.findAll({ where: { is_sold: sold } })

    res.send({
      status: 200,
      data: findSoldItem
    })
  }
}

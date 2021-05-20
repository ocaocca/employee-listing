module.exports = (sequelize, type) => {
  return sequelize.define('listings', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: type.STRING(200),
    product_desc: type.STRING(200),
    seller_id: type.INTEGER,
    is_sold: type.BOOLEAN,
    created_at: type.DATE,
    updated_at: type.DATE
  },
  {
    freezeTableName: true,
    underscored: true
  }
  )
}

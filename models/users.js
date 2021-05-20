module.exports = (sequelize, type) => {
  return sequelize.define('users', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: type.STRING(200),
    password: type.STRING(20),
    full_name: type.STRING(200),
    created_at: type.DATE,
    updated_at: type.DATE
  },
  {
    freezeTableName: true,
    underscored: true
  }
  )
}

require('dotenv').config()
const { User, Project, Tag } = require('../models')

const truncateTables = () => {
  console.log('truncating tables')
  User.destroy({ truncate : true, cascade: true })
  Project.destroy({ truncate : true, cascade: true })
  Tag.destroy({ truncate : true, cascade: true })
}

module.exports = truncateTables
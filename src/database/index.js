const path = require('path')
const Sequelize = require('sequelize')
const fs = require('fs')
import config from '../config/config'

const basename = path.basename(module.filename)
const db = {}
const dbConfig = config.mysql
let sequelize;

try {
    sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password,dbConfig)
}catch(e){
    throw e
}

fs.readdirSync(__dirname)
  .filter((file)=>{
      return (file.indexOf('.') && (file !==basename) && file.slice(-3)==='.js')
  })
  .forEach((file)=>{
      const model = sequelize['import'](path.join(__dirname,file)) 
      db[model.name] = model
})

db.sequelize = sequelize
db.Sequelize =Sequelize
module.exports = db

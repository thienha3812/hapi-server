const Sequelize = require('sequelize');
const sequelize = new Sequelize('jassis','jsa','thienthantronganhsang1998',{
    dialect:'mssql',
   host:'jcenter.sytes.net',
   port:1433,
   operatorsAliases: false,
   encrypt:false,
  
});
module.exports = sequelize;
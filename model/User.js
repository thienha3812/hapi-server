const config = require('./config');
const Sequelize = require('sequelize');

const User = config.define('NguoiDung',{
    MANGUOIDUNG: {
        type: Sequelize.STRING,
        primaryKey  : true
    },
    HO : Sequelize.STRING,
    TEN : Sequelize.STRING,
    SINHNHAT : Sequelize.TIME,
    DUONGDANANHDAIDIEN : Sequelize.STRING,
    MAPHUONGXA : Sequelize.INTEGER,
    MATONGIAO : Sequelize.INTEGER,
    sodienthoai : Sequelize.INTEGER,
    GIOITINH : Sequelize.STRING
},{
    tableName:"NGUOIDUNG",
    timestamps: false,
    freezeTableName: true
});
module.exports = User;
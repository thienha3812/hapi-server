const config = require('./config');
const Sequelize = require('sequelize');
const Account = config.define('TaiKhoan', {
    MATAIKHOAN: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    TENDANGNHAP: Sequelize.STRING,
    MATKHAU: Sequelize.STRING,
    NGAYDANGKY: Sequelize.TIME,
    NGAYCAPNHAT: Sequelize.TIME,
    TRANGTHAI: Sequelize.INTEGER,
    DIADIEMHIENTAI: Sequelize.STRING,
    DANGNHAPCUOI: Sequelize.TIME,
    EMAIL: Sequelize.STRING

}, {
        tableName: 'TAIKHOAN',  
        timestamps: false,
        freezeTableName: true

    });

module.exports = Account;

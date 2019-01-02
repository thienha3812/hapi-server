const Account = require('../model/Account');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userMutaion = {
    Mutation: {
        async login(parent, args) {
            const account = await Account.findOne({ where: { 'TENDANGNHAP': args.TENDANGNHAP, 'MATKHAU': args.MATKHAU } });
            if (!account) {
                return "User not exists";
            }
            if (bcrypt.compareSync(args.MATKHAU, account.dataValues["MATKHAU"])) {
                return "Password not match";
            }
            else {
                return jwt.sign({ username: account.dataValues["TAIKHOAN"], password: account.dataValues["MATKHAU"],id:account.dataValues["MATAIKHOAN"] }, "Scret", { algorithm: "HS512" });
            }
        }
    }
}
module.exports = userMutaion;
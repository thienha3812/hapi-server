const User = require("../model/User");
const jwt = require('jsonwebtoken');
const userQuery = {
    Query:{
        async getUser(root,args){
            console.log(args.token);
            return jwt.verify(args.token,"Scret",{algorithms:"HS512"},function(err,decoded){
                return User.findOne({where:{MANGUOIDUNG:decoded.id}});
            });
        }
    }
}
module.exports = userQuery;
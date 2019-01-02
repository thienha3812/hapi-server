const Account = require('../model/Account');


const userQuery = {
    Query: {
      getAccount:async (root,args,ctx,info)=>{
       return await Account.findOne({where:{'TENDANGNHAP':args.TENDANGNHAP,'MATKHAU':args.MATKHAU}});
     }
    },
  };
  module.exports =  userQuery;
const {  gql } = require('apollo-server-hapi');
const userTypes = gql`
    type Account{
        #Define Users
        MaTaiKhoan:Int
        TENDANGNHAP : String
        MATKHAU : String
        NGAYDANGKY:String
        NGAYCAPNHAT:String
        TRANGTHAI:Int
        DIADIEMHIENTAI:String
        DANGNHAPCUOI:String
        EMAIL:String
    }
    type Query{
        getAccount(TENDANGNHAP:String,MATKHAU:String,Email:String) : Account
    }
    type Mutation{
        login(TENDANGNHAP:String,MATKHAU:String,Email:String) : String!
    }
`;
module.exports = userTypes;
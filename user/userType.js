const { gql } = require('apollo-server-hapi');

const userType =  gql`
    type User{
        MANGUOIDUNG : String
        HO : String
        TEN : String
        SINHNHAT : String
        DUONGDANANHDAIDIEN : String
        MAPHUONGXA : String
        MATONGIAO : String
        sodienthoai : Int
        GIOITINH : String
    }
    type Query{
        getUser(token:String) : User
    }

`
module.exports = userType;
const { gql } = require('apollo-server-hapi');


const postType = gql`
type Query {
    messages: [String!]!
  }
  type Mutation {
    addMessage(message: String!, broadcast: Boolean!): [String!]!
  }
  type Subscription {
    newMessage(userId: Int!): String
  }

`
module.exports = postType;
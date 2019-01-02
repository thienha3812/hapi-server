const { ApolloServer } = require('apollo-server-hapi');
const Hapi = require('hapi');
const {merge,find,filter} = require('lodash');
const {PubSub} = require('apollo-server');
const {mergeTypes,mergeResolvers} = require('merge-graphql-schemas');
//Account
const accountMutation = require('./account/accountMutation');
const accountType = require('./account/accountType');
const accountQuery = require('./account/accountQuery');
//Post
const postQuery = require('./post/postQuery');
const postType = require('./post/postType');
//User
const userQuery = require('./user/userQuery');
const userType = require('./user/userType');


const typeDefs = mergeTypes([
    accountType,
    postType,
    userType
]);
const resolvers = mergeResolvers([
    accountMutation,
    accountQuery,
    postQuery,
    userQuery
]);
const app = new Hapi.server({
    port:4000
});

async function StartServer() {
    const server = new ApolloServer({ typeDefs, resolvers,subscriptions:{
        onConnect:(conn,websocket,context)=>{
           
        },
        onDisconnect:(conn,websocket,context)=>{
        },
        
    } });

    const app = new Hapi.server({
        port: 4000
    });

    await server.applyMiddleware({
        app,
    });

    await server.installSubscriptionHandlers(app.listener);
    await app.start();
}

StartServer().catch(error => console.log(error));
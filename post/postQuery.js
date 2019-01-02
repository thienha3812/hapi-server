const { PubSub,withFilter } = require('apollo-server');
const pubsub = new PubSub();
const messages = [];
const postQuery = {
    Query: {
        messages(root, {}, context) {
          return messages;
        }
      },
      Mutation: {
        addMessage(root, {message, broadcast}, context) {
          let entry = JSON.stringify({id: messages.length, message: message});
          messages.push(entry);
          pubsub.publish('newMessage', {entry: entry, authToken: context.authToken, broadcast});
          return messages;
        },
      },
      Subscription: {
         newMessage: {
            subscribe:withFilter(()=>pubsub.asyncIterator('newMessage'),(root,args,context,info)=>{
              console.log(root);
                return args;
            })
        }
      },
}
module.exports = postQuery;
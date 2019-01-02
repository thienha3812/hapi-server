const { PubSub } = require('apollo-server');
const pubsub = new PubSub();
const POST_ADDED = 'POST_ADDED';
const userSubscription = {
    Subscription: {
        postAdded: {
            // Additional event labels can be passed to asyncIterator creation
            subscribe: () => { return pubsub.asyncIterator([POST_ADDED]) }
        },
    }
}
module.exports = userSubscription;
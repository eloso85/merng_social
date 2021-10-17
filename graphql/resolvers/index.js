const postsReslovers = require('./posts');
const userResolver = require('./users');

module.exports = {
    Query: {
        ...postsReslovers.Query
    },
    Mutation: {
        ...userResolver.Mutation
    }
}
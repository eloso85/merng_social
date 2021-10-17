//graphql
const { ApolloServer } = require('apollo-server');
const gql = require('graphql-tag');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

//env variable
require('dotenv').config()
    //console.log(process.env.DB_HOST)

//mongo db
const mongoose = require('mongoose')
const Post = require('./models/Post')





const server = new ApolloServer({
    typeDefs,
    resolvers
});

//connect to database
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true })
    .then(() => {
        console.log('Mongo Connected')
        return server.listen({ port: 5000 })
    })
    .then((res) => {
        console.log(`Server running at ${res.url} `)
    })

// server.listen({ port: 5000 })
//     .then(res => {
//         console.log();
//     })
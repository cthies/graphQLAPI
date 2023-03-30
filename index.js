require('dotenv').config();
const {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const MONOGDB_USER = process.env.MONGODB_USERNAME;
const MONOGDB_PASSWORD = process.env.MONGODB_PASSWORD;


const MONGODB = `mongodb+srv://${MONOGDB_USER}:${MONOGDB_PASSWORD}@cluster0.ve9hms1.mongodb.net/?retryWrites=true&w=majority`;
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("success");
        return server.listen({port: 5000});
    })
    .then((res) => {
        console.log(`server running at ${res.url}`)
    })
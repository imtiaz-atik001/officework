const {ApolloServer}= require('@apollo/server')

const mongoose= require('mongoose')

const MONGODB = 'mongodb+srv://imtiaz:imtiaz@cluster0.uoa1zan.mongodb.net/workinDatabase?retryWrites=true&w=majority'

const typeDefs= require('./Graphql/typeDefs');
const resolvers=require('./Graphql/resolvers');

const server=new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB,{}).then(()=>{
    console.log("Server connected successfully");
    return server.listen({port:5000});
}).then((res)=>{
    console.log(`Server running at: ${res.url}`);
});

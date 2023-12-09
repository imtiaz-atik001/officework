const { ApolloServer } = require("@apollo/server");
const mongoose = require("mongoose");
const {expressMiddleware} =require('@apollo/server/express4')
const express =require('express')
const cors = require('cors');
const bodyParser = require("body-parser");


async function startServer(){
const app=express();



const uri= "mongodb+srv://imtiaz:imtiaz@cluster0.uoa1zan.mongodb.net/workinDatabase?retryWrites=true&w=majority"

const typeDefs= require('./Graphql/typeDefs');
const resolvers= require('./Graphql/resolvers'); 

mongoose.connect(uri,{
    //useNewUrlParser: true
}).then(()=>{
    console.log("DB connected successfully");
})
.catch((e)=>{
    console.log("Error in the connection",e)
});

app.use(bodyParser.json());

const server= new ApolloServer({
    typeDefs,
    resolvers
})

app.use(cors());

await server.start()
app.use("/graphql", expressMiddleware(server));

app.use('/',(rec,res)=>{
    res.send("Ok Ok");
})

app.listen(5000,()=> console.log("Server started at http://localhost:5000/graphql"));
}

startServer();

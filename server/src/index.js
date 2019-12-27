import {
  ApolloServer
} from "apollo-server-express";
import express from "express";
import mongoose from "mongoose";
import {
  resolvers
} from "./graphql/resolver";
import {
  typeDefs
} from "./schema/user";

const startServer = async () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  server.applyMiddleware({
    app
  });

  await mongoose.connect("mongodb://localhost:27017/graphql", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.listen({
      port: 4000
    }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
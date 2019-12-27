import {
  gql
} from "apollo-server-express";

export const typeDefs = gql `
    type Query {
      users:[User!]!
      user(id:ID!):User
      userEmail(email:String):User
    }
  
    type User {
      id: ID!
      name: String
      email:String!
      success:Boolean
      message:String
      phone:String
      address:String
      zipCode:String
      file:String
    }
  
  
    type Mutation {
      createUser( name:String!, email:String!,phone:String, address:String,zipCode:String,file: String):User!
    }
  `;
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express"); //will create a schema
exports.typeDefs = (0, apollo_server_express_1.gql) `
type User {
  id: Int!
  email: String!
  name: String
  posts: [Post!]!
}

type Post {
  id: Int!
  title: String!
  content: String
  published: Boolean!
  author: User!
}

type Query {
  users: [User!]!
  posts: [Post!]!
}

type Mutation {
  createUser(email: String!, name: String): User!
  createPost(title: String!, content: String, authorId: Int!): Post!
}
`;

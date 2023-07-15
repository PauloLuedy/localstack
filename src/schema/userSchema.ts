import { gql } from "apollo-server-express"; //will create a schema

export const typeDefs = gql`
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
`
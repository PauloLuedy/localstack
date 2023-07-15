"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const apollo_server_lambda_1 = require("apollo-server-lambda");
const index_1 = require("./resolver/index");
const index_2 = require("./schema/index");
const server = new apollo_server_lambda_1.ApolloServer({
    typeDefs: index_2.typeDefs,
    resolvers: index_1.resolvers,
});
exports.handler = server.createHandler();

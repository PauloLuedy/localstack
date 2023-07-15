"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.resolvers = {
    Query: {
        users: async () => {
            return await prisma.user.findMany();
        },
        posts: async () => {
            return await prisma.post.findMany();
        },
    },
    Mutation: {
        createUser: async (_, { email, name }) => {
            return await prisma.user.create({
                data: {
                    email,
                    name,
                },
            });
        },
        createPost: async (_, { title, content, authorId }) => {
            return await prisma.post.create({
                data: {
                    title,
                    content,
                    published: false,
                    author: {
                        connect: { id: authorId },
                    },
                },
            });
        },
    },
};

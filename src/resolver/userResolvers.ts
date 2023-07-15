import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: async () => {
      return await prisma.user.findMany();
    },
    posts: async () => {
      return await prisma.post.findMany();
    },
  },
  Mutation: {
    createUser: async (_, { email, name }:any) => {
      return await prisma.user.create({
        data: {
          email,
          name,
        },
      });
    },
    createPost: async (_, { title, content, authorId }:any) => {
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


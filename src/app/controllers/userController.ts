export const = users: async () => {
    return await prisma.user.findMany();
  }
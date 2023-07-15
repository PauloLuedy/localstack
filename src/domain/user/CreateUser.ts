import { User } from "@prisma/client";

export interface CreateUser {
    execute(name: string, email: string): Promise<User>;
  }
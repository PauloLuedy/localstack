// src/application/user/CreateUserController.ts

import { User } from '@prisma/client';
import { CreateUser } from '../../domain/user/CreateUser';

export class CreateUserController implements CreateUser {
  constructor(private userRepository: any) {}

  async execute(name: string, email: string): Promise<User> {
    return await this.userRepository.create(name, email);
  }
}

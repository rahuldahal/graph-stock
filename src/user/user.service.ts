import { Injectable } from '@nestjs/common';
import { TUser } from './user.model';

@Injectable()
export class UserService {
  private readonly users: TUser[] = [
    {
      id: 1,
      username: 'user1',
      email: 'user1@example.com',
      createdAt: '2024-04-07T12:00:00Z',
      updatedAt: '2024-04-07T12:00:00Z',
    },
    {
      id: 2,
      username: 'user2',
      email: 'user2@example.com',
      createdAt: '2024-04-07T12:00:00Z',
      updatedAt: '2024-04-07T12:00:00Z',
    },
    {
      id: 3,
      username: 'user3',
      email: 'user3@example.com',
      createdAt: '2024-04-07T12:00:00Z',
      updatedAt: '2024-04-07T12:00:00Z',
    },
  ];

  // create(user: TUser) {
  //   this.users.push(user);
  // }

  findOneById(id: number): TUser {
    console.log(`Queriying for user id: ${id}`);
    return this.users.find((user) => user.id === id);
  }
}

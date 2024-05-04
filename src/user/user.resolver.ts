import { Logger } from '@nestjs/common';
import { UserModel } from './user.model';
import { CreateUserDto } from './user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => UserModel)
export class UserResolver {
  private readonly logger = new Logger(UserResolver.name);

  constructor(private readonly userService: UserService) {}

  @Query((returns) => [UserModel])
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();
    return users;
  }

  @Mutation(() => UserModel)
  async createUser(@Args('input') input: CreateUserDto): Promise<UserEntity> {
    try {
      const user = await this.userService.create(input);
      return user;
    } catch (error) {
      this.logger.error(`Error creating user: ${error.message}`);
      throw error;
    }
  }
}

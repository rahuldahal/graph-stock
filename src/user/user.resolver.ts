import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(
    private usersService: UserService,
    // private portfolioService: PortfolioService,
  ) {}

  @Query((returns) => User)
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  //   @ResolveField()
  //   async getPortfolio(@Parent() user: User) {
  //     const { id } = user;
  //     return this.portfolioService.findAll({ userId: id });
  //   }
}

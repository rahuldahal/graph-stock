import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Portfolio } from 'src/portfolio/portfolio.model';

@ObjectType()
export class User {
  @Field((type) => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field((type) => [Portfolio])
  portfolios: Portfolio[];

  @Field()
  createdAt: string; // ISO Date String

  @Field()
  updatedAt: string; // ISO Date String
}

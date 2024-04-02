import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Portfolio {
  @Field((type) => Int)
  id: number;

  @Field()
  userId: number;

  @Field()
  name: string;

  @Field()
  createdAt: string; // ISO Date String

  @Field()
  updatedAt: string; // ISO Date String
}

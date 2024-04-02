import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Stock {
  @Field((type) => Int)
  id: number;

  @Field()
  symbol: string;

  @Field()
  name: string;

  @Field()
  description: string;
}

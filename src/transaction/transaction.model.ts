import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Transaction {
  @Field((type) => Int)
  id: number;

  @Field()
  portfolioId: number;

  @Field()
  stockId: number;

  @Field()
  type: string; // Enum can be used for better type safety

  @Field((type) => Int)
  quantity: number;

  @Field((type) => Float)
  price: number;

  @Field()
  timestamp: string; // ISO Date String
}

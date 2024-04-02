import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class StockHolding {
  @Field((type) => Int)
  id: number;

  @Field()
  portfolioId: number;

  @Field()
  stockId: number;

  @Field((type) => Int)
  quantity: number;

  @Field((type) => Float)
  averagePrice: number;

  @Field()
  createdAt: string; // ISO Date String

  @Field()
  updatedAt: string; // ISO Date String
}

import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class MarketData {
  @Field((type) => Int)
  id: number;

  @Field()
  symbol: string;

  @Field((type) => Float)
  price: number;

  @Field((type) => Float)
  volume: number;

  @Field()
  timestamp: string; // ISO Date String
}

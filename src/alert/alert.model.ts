import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Alert {
  @Field((type) => Int)
  id: number;

  @Field()
  userId: number;

  @Field()
  stockId: number;

  @Field()
  condition: string;

  @Field((type) => Float)
  threshold: number;

  @Field()
  triggered: boolean;

  @Field()
  createdAt: string; // ISO Date String

  @Field()
  updatedAt: string; // ISO Date String
}

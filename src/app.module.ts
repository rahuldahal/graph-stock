import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// Nest GraphQL Docs: https://docs.nestjs.com/graphql/quick-start
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // CWD: Current Wo rking Directory
      // playground: false,  TODO: maybe while in production?
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

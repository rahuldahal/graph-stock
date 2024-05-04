import { join } from 'path';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

// Nest GraphQL Docs: https://docs.nestjs.com/graphql/quick-start
@Module({
  imports: [
    ConfigModule.forRoot(), // so that, we don't need to import everytime we use .env
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // CWD: Current Working Directory
      // playground: false,  TODO: maybe while in production?
    }),
    UserModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

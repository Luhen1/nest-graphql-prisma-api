import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: true //this is the code first approach for the graphql
  }),
  LessonModule,
],

})
export class AppModule {}

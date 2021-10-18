import { Module, Post } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsSchema, Posts } from './posts/schemas/post.schema';

const mongOptions = {
  useNewUrlParser: true,
};
@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URL, mongOptions),
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

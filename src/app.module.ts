import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirestoreModule } from './firestore/firestore.module';
import { UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forRoot('Enter URI Here'),
    MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
    FirestoreModule],
  controllers: [AppController],
  providers: [AppService],
})
   
export class AppModule {}
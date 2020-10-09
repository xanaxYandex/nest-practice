import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/user/user.controller';
import { TodoController } from './controllers/todo/todo.controller';
import { TodoService } from './services/todo/todo.service';
import { UserService } from './services/user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './models/schemas/user.schema';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/nest-todo'),
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
    ],
    controllers: [
        AppController,
        UserController,
        TodoController
    ],
    providers: [
        AppService, TodoService,
        UserService,
    ],
})
export class AppModule {
}

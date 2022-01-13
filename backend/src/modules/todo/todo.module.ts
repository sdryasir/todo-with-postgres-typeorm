import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodoController } from 'src/controllers/todo/todo.controller';
import { TodoEntity } from 'src/models/todo/todo.entity';
import { TodoService } from 'src/services/todo/todo.service';

@Module({
    imports:[TypeOrmModule.forFeature([TodoEntity])],
    controllers:[TodoController],
    providers:[TodoService]
})
export class TodoModule {}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoDto } from 'src/models/todo/todo.dto';
import { TodoEntity } from 'src/models/todo/todo.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TodoService {

    constructor(@InjectRepository(TodoEntity) private todoRepository:Repository<TodoEntity>){}

    async createTodo(body:TodoDto):Promise<TodoDto>{
        return await this.todoRepository.save(body);
    }

    async getTodos():Promise<TodoDto[]>{
        return await this.todoRepository.find();
    }

    async getTodo(id:number):Promise<TodoDto>{
        return await this.todoRepository.findOne(id);
    }

    async updateTodo(body:TodoDto, id:number):Promise<UpdateResult>{
        return await this.todoRepository.update(id, body);
    }

    async deleteTodo(id:number):Promise<DeleteResult>{
        return await this.todoRepository.delete(id);
    }
}

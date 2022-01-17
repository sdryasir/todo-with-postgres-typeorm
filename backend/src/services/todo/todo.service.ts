import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QueryParamsDto } from 'src/controllers/todo/todo.controller';
import { TodoDto } from 'src/models/todo/todo.dto';
import { TodoEntity } from 'src/models/todo/todo.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TodoService {

    constructor(@InjectRepository(TodoEntity) private todoRepository:Repository<TodoEntity>){}

    async createTodo(body:TodoDto):Promise<TodoDto>{
        return await this.todoRepository.save(body);
    }

    async getTodos(searchText:QueryParamsDto):Promise<TodoDto[]>{
        const {search, sort, page} = searchText;
        const builder = this.todoRepository.createQueryBuilder('todo_entity')
        if(search){
            builder.where('LOWER(todo_entity.title) LIKE :search OR LOWER(todo_entity.description) LIKE :search',{search:`%${search.toLowerCase()}%`});
        }
        if(sort){
            builder.orderBy('todo_entity.title', sort.toUpperCase())
        }
        const pageNum:number = page||1
        const perPage = 9;
        builder.offset((pageNum - 1) * perPage).limit(perPage)
        return builder.getMany();
    }

    async getTodo(id:number):Promise<TodoDto>{
        //return await this.todoRepository.findOne(id);
        const builder = this.todoRepository.createQueryBuilder('todo_entity')
        return await builder.where('todo_entity.id = :id', {id}).getOne();
    }

    async updateTodo(body:TodoDto, id:number):Promise<UpdateResult>{
        return await this.todoRepository.update(id, body);
    }

    async deleteTodo(id:number):Promise<DeleteResult>{
        return await this.todoRepository.delete(id);
    }
}

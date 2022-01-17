import { InjectRepository } from '@nestjs/typeorm';
import {DataFactory, Seeder} from 'nestjs-seeder'
import { TodoEntity } from 'src/models/todo/todo.entity';

import { Repository } from 'typeorm';
export class TodoSeeder implements Seeder{

    constructor(@InjectRepository(TodoEntity) private todoRepository:Repository<TodoEntity>){}

    seed(): Promise<any> {
       const todos = DataFactory.createForClass(TodoEntity).generate(100);
       return this.todoRepository.insert(todos)
    }

    drop(): Promise<any> {
        return this.todoRepository.delete({});
    }
    

}
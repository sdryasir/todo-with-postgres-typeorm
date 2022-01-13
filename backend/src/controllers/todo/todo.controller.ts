import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiResponse } from '@nestjs/swagger';
import { JwtGuard } from 'src/guards/jwt.guard';
import { TodoDto } from 'src/models/todo/todo.dto';
import { TodoService } from 'src/services/todo/todo.service';
import { DeleteResult, UpdateResult } from 'typeorm';


@Controller('todos')
export class TodoController {

    constructor(private readonly todoService:TodoService){}

    @ApiBearerAuth()
    @UseGuards(JwtGuard)
    @Post()
    @ApiResponse({ status: 201, description: 'The todo has been successfully created.'})
    createTodo(@Body() body:TodoDto):Promise<TodoDto>{
        return this.todoService.createTodo(body);
    }

    @Get()
    @ApiOkResponse({status:200, description:'Array of all todos'})
    getTodos():Promise<TodoDto[]>{
        return this.todoService.getTodos();
    }

    @Get(':id')
    @ApiOkResponse({status:200, description:'Todo item'})
    getTodo(@Param('id') id:number):Promise<TodoDto>{
        return this.todoService.getTodo(id);
    }

    @Put(':id')
    updateTodo(@Body() body:TodoDto, @Param() id:number):Promise<UpdateResult>{
        return this.todoService.updateTodo(body, id);
    }

    @Delete(':id')
    deleteTodo(@Param() id:number):Promise<DeleteResult>{
        return this.todoService.deleteTodo(id);
    }
}

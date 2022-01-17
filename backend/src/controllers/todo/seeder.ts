import { TypeOrmModule } from "@nestjs/typeorm";
import { seeder } from "nestjs-seeder";
import { TodoEntity } from "src/models/todo/todo.entity";
import { TodoSeeder } from "./todo.seeder";

seeder({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DATABASE,
            entities: [TodoEntity],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([TodoEntity]),
      ]
}).run( [TodoSeeder])
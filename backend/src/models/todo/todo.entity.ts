import { Factory } from "nestjs-seeder";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class TodoEntity extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Factory(faker=>faker.lorem.words(3))
    @Column()
    title: string;

    @Factory(faker=>faker.lorem.words(10))
    @Column()
    description: string;

    @Column({ default: false })
    status: boolean;



}
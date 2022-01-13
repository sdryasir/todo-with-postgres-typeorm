import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fullname:string;

    @Column()
    email:string;

    @Column()
    password:string;

}
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/models/auth/user.dto';
import { UserEntity } from 'src/models/auth/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(UserEntity) 
        private userRepository:Repository<UserEntity>,
        private jwtService:JwtService
        ){}

    async createUser(body:UserDto):Promise<UserDto>{
        const user = new UserEntity();
        user.fullname = body.fullname;
        user.email = body.email;
        user.password = await bcrypt.hash(body.password, 12);
        return await user.save();
    }

    async validateUser(email:string, password:string){
        const user = await this.userRepository.findOne({email});
        const isValid = await bcrypt.compare(password, user.password);
        if(isValid)
        {
            return user;
        }
    }

    async login(body:UserDto):Promise<{user:UserDto, token:string}>{
        const {email, password} = body;
        const user = await this.validateUser(email, password);
        if(user){
            const token = await this.jwtService.signAsync({user})
            return {user, token}
        }
    }

}

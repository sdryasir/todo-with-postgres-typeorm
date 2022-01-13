import { Body, Controller, Post } from '@nestjs/common';
import { UserDto } from 'src/models/auth/user.dto';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly userService:AuthService){}

    @Post('register')
    createUser(@Body() body:UserDto):Promise<UserDto>{
        return this.userService.createUser(body)
    }

    @Post('login')
    login(@Body() body:UserDto):Promise<{user:UserDto, token:string}>{
        return this.userService.login(body);
    }
}

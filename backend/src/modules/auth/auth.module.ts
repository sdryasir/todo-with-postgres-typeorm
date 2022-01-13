import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { UserEntity } from 'src/models/auth/user.entity';
import { AuthService } from 'src/services/auth/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtGuard } from 'src/guards/jwt.guard';
import { JwtStrategy } from 'src/guards/jwt.stratgy';

@Module({
    imports:[
        TypeOrmModule.forFeature([UserEntity]),
        JwtModule.registerAsync({
            useFactory:()=>({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '3600s' },
            })
        }),
    ],
    controllers:[AuthController],
    providers:[AuthService, JwtGuard, JwtStrategy]
})
export class AuthModule {}

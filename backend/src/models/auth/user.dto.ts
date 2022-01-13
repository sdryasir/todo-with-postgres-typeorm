import { ApiProperty } from "@nestjs/swagger";

export class UserDto{

    @ApiProperty()
    id:number;

    @ApiProperty()
    fullname:string;

    @ApiProperty()
    email:string;

    @ApiProperty()
    password:string;
}

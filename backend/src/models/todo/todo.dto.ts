import { ApiProperty } from "@nestjs/swagger";

export class TodoDto{

    @ApiProperty({
        default:'auto generated id'
    })
    id:number;

    @ApiProperty()
    title:string;

    @ApiProperty()
    description:string;

    @ApiProperty({
        default:false
    })
    status:boolean;
}
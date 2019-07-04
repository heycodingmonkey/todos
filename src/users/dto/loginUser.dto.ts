import { ApiModelProperty } from '@nestjs/swagger';

export class loginUserDto {

    @ApiModelProperty()
    readonly email : string;

    @ApiModelProperty()
    readonly password: string;
}
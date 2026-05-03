import { IsString } from "class-validator";

export class createCarDto {

    @IsString()
    readonly make: string;
    @IsString()
    readonly model: string;

    @IsString()
    readonly year: string;
}

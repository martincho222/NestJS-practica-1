import { IsString, IsUUID, IsOptional } from "class-validator";



export class UpdateCarDto{
    @IsUUID()
    @IsString()
    @IsOptional()
    readonly id?: string;

    @IsString()
    @IsOptional()
    readonly make?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;

    @IsString()
    @IsOptional()
    readonly year?: string;
}
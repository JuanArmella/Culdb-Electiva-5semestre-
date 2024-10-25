import { IsEmail, IsInt, Max, Min, MinLength, MaxLength } from "class-validator";

export class CreateClientDto {
    @MinLength(3, { message: "El nombre es muy corto"})
    firstname: string;
    @MinLength(3, { message: "El apellido es muy corto"})
    lastname: string;
    @IsEmail()
    email: string;
    @IsInt()
    @Min(18, { message: "La edad no puede ser menor de 18 años"})
    @Max(70, { message: "La edad no puede ser mayor de 70 años"})
    age: number;
    @MinLength(8, { message: "La cedula debe tener minimo 8 caracteres"})
    @MaxLength(10, { message: "La cedula debe tener maximo 10 caracteres"})
    Cc: string;
}
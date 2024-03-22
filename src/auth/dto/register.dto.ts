import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Role } from '../../common/enums/rol.enum';

export class RegisterDto {
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(1)
  name: string;
  @IsEmail()
  email: string;
  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  readonly role: Role[];
  @IsBoolean()
  @IsOptional()
  readonly status: string;
  // readonly created_at: Date;
  // readonly updated_at: Date;
  readonly deleted_at: Date;
}

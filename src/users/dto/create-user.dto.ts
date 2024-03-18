import {
  IsBoolean,
  // IsInt,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  // @IsInt()
  // @IsOptional()
  // readonly id: number;
  @IsString()
  @MinLength(1)
  readonly name?: string;
  @IsString()
  @MinLength(1)
  readonly email: string;
  @IsString()
  @MinLength(1)
  readonly password: string;
  @IsString()
  @IsOptional()
  readonly role: string;
  @IsBoolean()
  @IsOptional()
  readonly status: string;
  // readonly created_at: Date;
  // readonly updated_at: Date;
  readonly deleted_at: Date;
}

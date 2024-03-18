import { IsBoolean, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly name: string;
  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly email: string;
  @IsString()
  @MinLength(1)
  @IsOptional()
  readonly password: string;
  @IsString()
  @IsOptional()
  readonly role: string;
  @IsBoolean()
  @IsOptional()
  readonly status: string;
  // @IsOptional()
  // readonly created_at: Date;
  // @IsOptional()
  // readonly updated_at: Date;
  @IsOptional()
  readonly deleted_at: Date;
}

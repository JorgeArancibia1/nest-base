import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  // @IsString()
  // @MinLength(1)
  // @IsOptional()
  // readonly name: string;
  // @IsString()
  // @MinLength(1)
  // @IsOptional()
  // readonly email: string;
  // @IsString()
  // @MinLength(1)
  // @IsOptional()
  // readonly password: string;
  // @IsString()
  // @IsOptional()
  // readonly roles: Role[];
  // @IsBoolean()
  // @IsOptional()
  // readonly status: string;
  // @IsOptional()
  // readonly created_at: Date;
  // @IsOptional()
  // readonly updated_at: Date;
  // @IsOptional()
  // readonly deleted_at: Date;
}

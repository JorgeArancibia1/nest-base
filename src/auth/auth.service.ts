import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import { hash, compare } from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register({ name, email, password }: RegisterDto) {
    //Primero nos aseguramos que el usuario no exista
    const user = await this.usersService.findOneByEmail(email);

    // Si encuentra un usuario, "user" será true
    if (user) {
      throw new BadRequestException(
        'Ya existe un usuario creado con ese correo',
      );
    }

    await this.usersService.create({
      name,
      email,
      password: await hash(password, 10), // el segundo parámetro son saltos o palabras aleatorias al momento de encriptar o hashear para que si una contraseña es igual a otra, no tengan el mismo hash (se recomienda dejar alto por seguridad)
      role: 'user',
      status: 'active',
      deleted_at: null,
    });

    return {
      message: 'Usuario creado con éxito',
      name,
      email,
    };
  }

  async login({ email, password }: LoginDto) {
    const user = await this.usersService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Email o contraseña incorrectos');
    }

    // Se compara la contraseña que el usuario ingresó con la contraseña hasheada que está en la base de datos
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new UnauthorizedException('Email o contraseña incorrectos');
    }

    const payload = { email: user.email, role: user.role };

    const token = await this.jwtService.signAsync(payload);

    return {
      token,
      email,
    };
  }

  async profile({ email, role }: { email: string; role: string }) {
    // return { email, role };
    if (role) return await this.usersService.findOneByEmail(email);
  }
}

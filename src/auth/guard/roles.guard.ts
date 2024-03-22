import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator';
import { Role } from '../../common/enums/rol.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!roles) {
      return true;
    }

    //Con esta linea sacamos el usuario que está en el request
    const { user } = context.switchToHttp().getRequest();
    console.log(user);

    // Validación de que si 'roles' contiene Role.ADMIN, entonces lo deja pasar a cualquier ruta
    if (roles.includes(Role.ADMIN)) {
      return true;
    }

    //Con esta linea comprobamos si el usuario tiene el rol necesario para acceder a la ruta
    return roles && roles.some((role) => user.roles?.includes(role));
  }
}

import { Role } from '../enums/rol.enum';

export interface IUserActive {
  email: string;
  roles: Role[];
}

import { Role } from "./user-type.model";
import type UserDto  from "./user.model";

export class UserInfo {
  id!: string;
  name!: string;
  role!: Role;
  token?: string;
  message?: string;
  user?: UserDto
}

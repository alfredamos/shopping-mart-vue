import { Gender } from "./gender.model";
import { Role } from "./user-type.model";

export class ChangeUserRoleDto {
  name: string = "";
  email: string = "";
  phone: string = "";
  gender: Gender = Gender.Male;
  role: Role = Role.Customer
}

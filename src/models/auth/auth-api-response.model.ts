import type { UserDetail } from "./user-detail.model";
import type{ Role } from "./user-type.model";

export class AuthApiResponse{
  message!: string;
  token!: string;
  isLoggedIn!: boolean;
  role?: Role;
  user?: UserDetail;
}
import { authService } from "@/services/auth.service";
import { Role } from "../auth/user-type.model";

export function adminRoute(to: any, from: any, next: (path?: string) => void){
  const userInfo = authService.getLocalAuthUser();
  const isAdmin = userInfo?.role === Role.Admin
  if(isAdmin){
    next()
  }else{
    next("/not-allowed");
  }
}
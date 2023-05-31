import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EncodedJWTSecretKey } from '../../../environments/environment'
import { jwtVerify } from 'jose';

export const authGuard: CanActivateFn = async (route, state) => {
  var router = inject(Router);
  var toastService = inject(ToastrService)

  // const token = localStorage.getItem("token") ==> From Backend

  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.B5Hhm9FDqJ0WJTrrQDKZQ7Q3yQ2BuZMwR3RclEpP9zs"

  if (!!token) {
    try {
      await jwtVerify(token, EncodedJWTSecretKey);
      return true;
    }
    catch {
      toastService.error("Invalid Secretkey or Token", "Invalid Authorization")
      return false;
    }
  }
  return router.createUrlTree(["login"])
};

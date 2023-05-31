import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../service/user.service';
import { jwtVerify } from 'jose';
import { EncodedJWTSecretKey } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: UserService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const clientToken = localStorage.getItem('token');
    if (!clientToken) return next.handle(req);
    try {
      jwtVerify(clientToken, EncodedJWTSecretKey).then(data => {
        const modifiedRequest = req.clone({ headers: req.headers.set('Authorization', data.payload.sub!) });
        return next.handle(modifiedRequest);
      })
      return next.handle(req);
    }
    catch { return next.handle(req); }
  }
}

import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      tap((event: HttpEvent<any>) => {
        console.log(event);
      }),
      // retry(2),
      catchError((error: HttpErrorResponse) => {
        return this.handleError(error);
      })
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if(error.status === 404){
      this.toastr.error("No Data Found", "Error");
    }
    else if (error.status === 0) {
      this.toastr.error("Please try again later", "Service is under maintenance");
    }
    return throwError(() => new Error('Something bad happened. Please try again later.'));
  }

}

import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DatabaseDomain } from 'src/environments/environment';
import { DataResponse } from '../../component/models/data-response';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  baseUrl: string = DatabaseDomain;

  constructor(private http: HttpClient) { }

  public getAll<T>(entityName: String): Observable<DataResponse<T>> {
    return this.http.get<DataResponse<T>>(this.baseUrl + entityName).pipe(
      catchError(this.handleError)
    );
  }

  public getById<T>(id: number, entityName: String): Observable<DataResponse<T>> {
    return this.http.get<DataResponse<T>>(`${this.baseUrl + entityName}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  public post<T>(item: T, entityName: String): Observable<DataResponse<T>> {
    return this.http.post<DataResponse<T>>(this.baseUrl + entityName, item).pipe(
      catchError(this.handleError)
    );
  }

  public put<T>(id: number, item: T, entityName: String): Observable<DataResponse<T>> {
    return this.http.put<DataResponse<T>>(`${this.baseUrl + entityName}/${id}, item}`, item).pipe(
      catchError(this.handleError)
    );
  }

  public delete<T>(id: number, entityName: String): Observable<DataResponse<T>> {
    const url = `${this.baseUrl + entityName}/${id}`;
    return this.http.delete<DataResponse<T>>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    console.error('An error occurred:', error);
    return throwError('Something went wrong. Please try again later.');
  }
}



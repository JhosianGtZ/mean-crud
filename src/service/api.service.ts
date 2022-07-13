import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {  
  HttpClient,
  HttpHeaders,
  HttpResponse
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri: string = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  
  constructor(private http: HttpClient) { }

  //Create 

  createEmployee(data): Observable<any>{
    let url = `${this.baseUri}/create`
  }
}

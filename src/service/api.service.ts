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

  constructor() { }
}

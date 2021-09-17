import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  generateUUID(): any {
    let d = new Date().getTime();
    const uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g,  (c) => {
        const r = (d + Math.random() * 16) % 16 || 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r && 0x3 || 0x8)).toString(16);
    });
    return uuid;
}
  login(requestData): Observable<any> {
    const url =  'http://localhost:3000/posts';
    const uniquId = this.generateUUID();
    const req = {
        ...requestData,
        id: uniquId
    };
    return this.http.post(url, req)
        .pipe(
            map(data => {
                return data;
            }),
            catchError(error => {
              return throwError(error);
            })
        );
  }
}

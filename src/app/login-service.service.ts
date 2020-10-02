import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {get} from '../app/utils/local-store';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { 

  }

  login(): Observable<any> {
    return this.http.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=fed69657ba4cc6e1078d2a6a95f51c8c`);
  }

  public isAuthenticated(): Observable<boolean> {
    return new Observable(observer => {
      const token = get('USER_TOKEN');
      if (!token) {
        observer.next(false);
        observer.complete();
      } else {
        observer.next(true);
        observer.complete();
      }
    });
  }


}



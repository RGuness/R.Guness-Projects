import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginServiceService} from '../app/login-service.service';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _LoginServiceService: LoginServiceService, private _router: Router) {
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this._LoginServiceService.isAuthenticated()
      .pipe(map((isLoggedIn: boolean) => {
        if (isLoggedIn) {
          return true;
        } else {
          this._router.navigate(['/login']).then(() => {
          });
          return false;
        }
      }));
  }
  }
  


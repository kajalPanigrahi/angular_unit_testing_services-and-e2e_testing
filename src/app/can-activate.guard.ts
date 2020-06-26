import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RouteService } from './services/route.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private authService : AuthenticationService, private routerService : RouteService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
     
      // ************* 1. with promise ****************

      return this.authService.isUserValid(this.authService.getAuthToken())
      .then(
        data=>{
          console.log(data);
          if(!data)
            this.routerService.toLogin(); 
            
          return data;
        }
      )

      // *********** 2. with observable with mapped response **************

      // let s1 = this.authService.isUserValid(this.authService.getAuthToken())
      // s1.subscribe(
      //   data=>{
      //     console.log(data);
      //     if(!data)
      //       this.routerService.toLogin();
      //   }
      // );
      // return s1; 
 

      // *********** 3. with observable without mapped response **************

      // let s = this.authService.isUserValid(this.authService.getAuthToken())
      // s.subscribe(
      //   data=>{
      //     console.log(data);
      //     if(!(data['isAuthenticated']))
      //       this.routerService.toLogin();
      //   }
      // );
      // return s.pipe(map(data=>data['isAuthenticated']));

  }
  
}

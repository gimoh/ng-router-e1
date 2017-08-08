import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad,
  NavigationExtras, Route, Router, RouterStateSnapshot
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const url: string = state.url;
    console.log('AuthGuard#canActivate called for:', url);
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    const redirectUrl = `/${route.path}`;
    return this.checkLogin(redirectUrl);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // store attempted URL for redirecting
    this.authService.redirectUrl = url;

    // create a dummy session id
    const sessionId = Math.floor(Math.random() * 1000000);

    // navigation extras object contains global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { sessionId },
      fragment: 'anchor'
    };

    // navigate to the login page
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }

}

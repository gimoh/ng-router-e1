import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message: string;

  constructor(private authService: AuthService, private router: Router) {
    this.setMessage();
  }

  setMessage(): void {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(): void {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our AuthService
        // If no URL has been set, use default
        const redirect = this.authService.redirectUrl ?
          this.authService.redirectUrl : '/admin';

        // configure navigation to pass (preserve) global query params
        // and fragment
        const navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        // redirect the user
        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.setMessage();
  }

  ngOnInit() {
  }

}

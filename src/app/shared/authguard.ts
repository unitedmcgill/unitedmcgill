import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthenticationService } from '../services/auth.service';

 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService : AuthenticationService, private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        var token = localStorage.getItem('currentUser')
        if (token) {
            
            // Check expiration
            if ( token && tokenNotExpired('currentUser')){
                return true;
            }

            // Expired, so log them out
            this.authService.logout();
        }
        
        // Save the intended naviation link for use later if authenticated
        this.authService.url = state.url;
        
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }

}
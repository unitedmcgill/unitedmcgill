import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/auth.service';

 
@Injectable()
export class AuthGuard implements CanActivate {
 
    constructor(private authService : AuthenticationService, private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        
        if (localStorage.getItem('currentUser')) {
            //logged in so return true
            return true;
            //localStorage.clear();
            //return false;
        }
        
        // Save the intended naviation link for use later if authenticated
        this.authService.url = state.url;
        
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    }

}
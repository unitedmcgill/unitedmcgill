import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationUser } from '../models/applicationuser';
import { FormsModule }   from '@angular/forms';
 
import { AuthenticationService } from '../services/auth.service';
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: ApplicationUser = {userName: 'Administrator', password:''};
    loading = false;
    error = '';
 
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model)
            .subscribe(result => {
                if (result === true) {
                    // login successful
                    this.router.navigate([this.authenticationService.url]);
                } else {
                    // login failed
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }
}
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { ConfigService } from "./config.service";
import { ApplicationUser } from "../models/applicationuser";
 
@Injectable()
export class AuthenticationService {
    public url : string;
    public token: string;
    private config : any;

    constructor(private configService: ConfigService, private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.config = configService.config;
    }
 
    login( applicationUser : ApplicationUser): Observable<boolean> {
        let url = this.config.apiUrl+'/jwt';
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let bodyString = JSON.stringify(applicationUser );
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        return this.http.post(url, bodyString , {headers:headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let body = response["_body"];
                let accessToken = JSON.parse(body);
                let token = accessToken["access_token"];
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: applicationUser.userName, token: token }));
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}
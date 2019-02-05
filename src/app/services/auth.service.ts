
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable, EventEmitter, Output } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

import { ConfigService } from "./config.service";
import { ApplicationUser } from "../models/applicationuser";


@Injectable()
export class AuthenticationService {
    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    public url : string;
    public token: string;
    private config : any;

    constructor(private configService: ConfigService, private http: HttpClient) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
        this.config = configService.config;
    }
 
    login( applicationUser : ApplicationUser): Observable<boolean> {
        let url = this.config.apiUrl+'/jwt';
        //let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }); // ... Set content type to JSON
        let bodyString = JSON.stringify(applicationUser );
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        return this.http.post(url, bodyString , {headers:headers}).pipe(
            map((response: Response) => {
                // login successful if there's a jwt token in the response
                //let body = response["_body"];
                //let accessToken = JSON.parse(body);
                let token = response["access_token"];
                if (token) {
                    // set token property
                    this.token = token;
 
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: applicationUser.userName, token: token }));

                    // Update the header with username
                    this.getLoggedInName.emit(applicationUser.userName);
 
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    this.getLoggedInName.emit("");
                    return false;
                }
            }));
    }
 
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');

        // Update the header
        this.getLoggedInName.emit("");
    }

    checkUser() : Observable<string>{
    let url = this.config.apiUrl+"/checkuser";
        return this.http.get<string>(url).pipe(
        catchError(this._handleError));
    }

    private _handleError(error:any){
        console.error(error);
        return observableThrowError(error);
    }
}
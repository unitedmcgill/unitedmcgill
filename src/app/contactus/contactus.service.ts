import { Injectable } from '@angular/core';
import  { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from "../services/config.service";
import { ContactUs } from '../models/contact-us'
import {Observable} from 'rxjs/Rx';

@Injectable()
export class ContactUsService{

    private config : any;

    constructor(private configService: ConfigService, private http: Http){
        this.config = configService.config;
    }

    public sendMessage(contact : ContactUs){
        let bodyString = JSON.stringify(contact); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        let url = this.config.apiUrl+"/contactus"
        this.http.post(url, bodyString, options)
        .map((response:Response) => response.json())
        .catch(this._handleError);

        alert(url + ":" + bodyString);
    }

    private _handleError(err:any){
        console.log(err);
        return Observable.throw(err);
    }
}
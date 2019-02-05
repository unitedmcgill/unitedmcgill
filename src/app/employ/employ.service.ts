
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { ConfigService } from "../services/config.service";
import { IEmploymentListItem } from '../models/employment';
import { IApplication, SectionA, SectionB } from '../models/application';
import { Values } from '../models/values';
import { AuthenticationService } from '../services/auth.service';
import { ContactUs } from '../models/contact-us';





@Injectable()
export class EmployService{

    private config : any;

    constructor(    private authService: AuthenticationService,
                    private configService: ConfigService, private http: HttpClient){
        this.config = configService.config;
    }

    // public checkUser() : Observable<string>{
    //     let url = this.config.apiUrl+"/checkuser";
    //     return this.http.get(url)
    //                .map((res: Response) => {
    //                     let result = res.json();
    //                     //TODO you can do stuff with the values here if you want
    //                     return result;
    //                })
    //                .catch(this._handleError);
    // }

    // public convertVolumeFlowRate(value : string, bToCfm : string) : Observable<string>{
    //     let parms = '/'+value+'/'+bToCfm;
    //     let url = this.config.apiUrl+"/convertvolumeflowrate"+parms;
    //     return this.http.get(url)
    //                .map((res: Response) => {
    //                     let result = res.json();
    //                     //TODO you can do stuff with the values here if you want

    //                     return result;
    //                })
    //                .catch(this._handleError);
    // }

    public getApplicants() : Observable<IEmploymentListItem[]>{
       
        //let bodyString = JSON.stringify(''); // Stringify payload
        //let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/applicant";
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.token });
        //let options = new RequestOptions({ headers: headers });
        let options = {headers: headers};

        return this.http.get<IEmploymentListItem[]>(url, options).pipe(//, bodyString, {headers:headers})
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }

    public getApplicant(id : number) : Observable<IEmploymentListItem>{
       
        //let bodyString = JSON.stringify(''); // Stringify payload
        //let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/applicant"+"/"+id;
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.token });
        //let options = new RequestOptions({ headers: headers });
        let options = {headers: headers};

        return this.http.get<IEmploymentListItem>(url, options).pipe(//, bodyString, {headers:headers})
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }

    public saveApplicant(applicant : IEmploymentListItem) : Observable<IEmploymentListItem>{
       
        let bodyString = JSON.stringify(applicant); // Stringify payload
        // let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/applicant"+"/"+applicant.employmentAppId;
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.token,
                                    'Content-Type': 'application/json'});
        //let options = new RequestOptions({ headers: headers });
        let options = {headers: headers};

        return this.http.put<IEmploymentListItem>(url, bodyString, options).pipe(
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }    

    public getApplication(code : string) : Observable<IApplication>{
        
        console.log('Inside getApplication()');
        //let bodyString = JSON.stringify(''); // Stringify payload
        //let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/onlineapp"+"/"+code;

        return this.http.get<IApplication>(url).pipe(//, bodyString, {headers:headers})
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }

     public saveApplication(application : IApplication) : Observable<IApplication>{
       
        let bodyString = JSON.stringify(application); // Stringify payload
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/onlineapp"+"/"+application.employmentAppId;

        return this.http.put<IApplication>(url, bodyString, {headers:headers}).pipe(
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }    

    public newApplicant(applicant : IEmploymentListItem) : Observable<IEmploymentListItem>{
       
        let bodyString = JSON.stringify(applicant).replace('"employmentAppId":-1,',''); // Stringify payload
        // Remove "employmentAppId":-1,
        
        let url = this.config.apiUrl+"/applicant";
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.token,
                                    'Content-Type': 'application/json'});
        //let options = new RequestOptions({ headers: headers });
        let options = {headers: headers};

        return this.http.post<IEmploymentListItem>(url, bodyString, options).pipe(
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }

    //public saveApplication(application : IApplication) : Observable<IApplication>{
    public generatePDF(application : IApplication) : Observable<Values> {
        let bodyString = JSON.stringify(application); // Stringify payload
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/generatepdf";     

        return this.http.put<Values>(url, bodyString, {headers:headers}).pipe(
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }

    public emailApplicant(contact : ContactUs) : Observable<ContactUs> {
       
        let bodyString = JSON.stringify(contact); // Stringify payload
        let url = this.config.apiUrl+"/emailapplicant";
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.token,
                                    'Content-Type': 'application/json'});
        //let options = new RequestOptions({ headers: headers });
        let options = {headers: headers};

        //let options = new RequestOptions({ headers: headers, method: "post" }); // Create a request option
        //.map((response:Response) => response.json())
        // .map((res:Response) => {
        //     console.log(res.json());
        //     return res.json();})

        return this.http.post<ContactUs>(url, bodyString, options).pipe(
        catchError(this._handleError));
       
        //alert(url + ":" + bodyString);
    }  

    public notifyPersonnel(contact : ContactUs ) : Observable<ContactUs> {
        let bodyString = JSON.stringify(contact); // Stringify payload
        let url = this.config.apiUrl+"/notifypersonnel";
        let headers = new HttpHeaders({ 'Authorization': 'Bearer ' + this.authService.token,
                                    'Content-Type': 'application/json'});
        //let options = new RequestOptions({ headers: headers });
        let options = {headers: headers};

        //let options = new RequestOptions({ headers: headers, method: "post" }); // Create a request option
        //.map((response:Response) => response.json())
        // .map((res:Response) => {
        //     console.log(res.json());
        //     return res.json();})

        return this.http.post<ContactUs>(url, bodyString, options).pipe(
        catchError(this._handleError));        
    }

    private _handleError(error:any){
        console.error(error);
        return observableThrowError(error);
    }
}
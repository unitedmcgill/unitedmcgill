import { Injectable } from '@angular/core';
import  { Http, Response, Headers, RequestOptions } from '@angular/http';
import { ConfigService } from "../services/config.service";
import { Observable } from 'rxjs/Observable';
import { IEmploymentListItem } from '../models/employment';
import { IApplication, SectionA, SectionB } from '../models/application';
import { Values } from '../models/values';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class EmployService{

    private config : any;

    constructor(private configService: ConfigService, private http: Http){
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
        //let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/applicant";

        return this.http.get(url)//, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public getApplicant(id : number) : Observable<IEmploymentListItem>{
       
        //let bodyString = JSON.stringify(''); // Stringify payload
        //let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/applicant"+"/"+id;

        return this.http.get(url)//, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    public saveApplicant(applicant : IEmploymentListItem) : Observable<IEmploymentListItem>{
       
        let bodyString = JSON.stringify(applicant); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/applicant"+"/"+applicant.employmentAppId;

        return this.http.put(url, bodyString, {headers:headers})
        .map((res:Response) => {
            //let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return res;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    public getApplication(code : string) : Observable<IApplication>{
       
        //let bodyString = JSON.stringify(''); // Stringify payload
        //let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/onlineapp"+"/"+code;

        return this.http.get(url)//, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

     public saveApplication(application : IApplication) : Observable<IApplication>{
       
        let bodyString = JSON.stringify(application); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/onlineapp"+"/"+application.employmentAppId;

        return this.http.put(url, bodyString, {headers:headers})
        .map((res:Response) => {
            //let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return res;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }    

    public newApplicant(applicant : IEmploymentListItem) : Observable<IEmploymentListItem>{
       
        let bodyString = JSON.stringify(applicant).replace('"employmentAppId":-1,',''); // Stringify payload
        // Remove "employmentAppId":-1,
        
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/applicant";

        return this.http.post(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    //public saveApplication(application : IApplication) : Observable<IApplication>{
    public generatePDF(application : IApplication) : Observable<Values> {
        let bodyString = JSON.stringify(application); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let url = this.config.apiUrl+"/generatepdf";     

        return this.http.put(url, bodyString, {headers:headers})
        .map((res:Response) => {
            let data = res.json();
            //console.log('test: '+data);
            // Fix enums
            //let duct = DuctType[data.type];
            //data.type = duct;

            return data;
        })      
        .catch(this._handleError);
       
        //alert(url + ":" + bodyString);
    }

    private _handleError(error:any){
        console.error(error);
        return Observable.throw(error._body);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    } 

}
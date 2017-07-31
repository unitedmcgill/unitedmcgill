import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployService } from './employ.service';
import { IEmploymentListItem} from '../models/employment';

@Component({
  //selector: 'app-products',
  templateUrl: './employ-details.component.html',
  styleUrls: ['./employ-details.component.scss']
})
export class EmployDetailsComponent implements OnInit, OnDestroy {

  public statusTypes = [
    { value: 'C', display: 'Current' },
    { value: 'D', display: 'Deleted' },
    { value: 'H', display: 'Hide' },
    { value: 'K', display: 'Keep' }
  ];

  public applicant : IEmploymentListItem = {
    employmentAppId : -1,
    created : 0,
    lastUpdate : 0,
    lastName: '',
    firstName: '',
    status: this.statusTypes[0].value,
    code: ''
  };

  public applicantCopy = null;
  public showLoader : boolean = false;
  public sub :any;
  public created : Date;
  public lastUpdate : Date;

    constructor(  private route: ActivatedRoute,
                  private employService: EmployService,
                  private router: Router) {
    //this.active = true;
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      if ( id == -1 )
      {
        this.createApplicant();
      }
      else
      {
        this.getApplicant(id);               
      }

    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public selectedRow(i){
    alert(i);
  }

  public getApplicant(id){
    this.showLoader = true;
    this.employService.getApplicant(id)
      .subscribe((data: IEmploymentListItem) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.applicant = data;
            this.applicantCopy = Object.assign({}, this.applicant);
            this.created = new Date(this.applicant.created*1000);
            this.lastUpdate = new Date(this.applicant.lastUpdate*1000);
            // console.log(this.ductConvert);
          } else {
            console.log("error");
          }
        },
        // On Error
        (err:any) => {
          console.log(err);
          alert(err);
          this.showLoader = false;
        },
        // Finally
        () => this.showLoader = false);
        
  }

  public cancel(){
    this.applicant = this.applicantCopy;
    this.applicant = Object.assign({}, this.applicantCopy);
  }

  private getNextCode(len)
  {
    var bits = 36;
    var outStr = "", newStr;
    while (outStr.length < len) {
        newStr = Math.random().toString(bits).slice(2);
        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
    }
    return outStr.toLowerCase();
  }

  public createApplicant(){
    this.created = new Date();
    this.applicant = {
        employmentAppId : -1,
        created : Math.round(this.created.getTime()/1000), // time() in php was seconds since the Epoch, Date gives ms
        lastUpdate : 0,
        lastName: '',
        firstName: '',
        status: this.statusTypes[0].value,
        code: this.getNextCode(10)
       }

  }

  public save(){
    if ( this.applicant.employmentAppId == -1)
    {
      this.newApplicant(); 
    }
    else
    {
      this.saveApplicant();
    }
  }

  private saveApplicant(){
    this.showLoader = true;
    this.lastUpdate = new Date();
    this.applicant.lastUpdate = Math.round( this.lastUpdate.getTime()/1000); // time() in php was seconds since the Epoch, Date gives ms
    
    this.employService.saveApplicant(this.applicant)
      .subscribe((data: IEmploymentListItem) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            // Save was successfull so update the Copy
            this.applicantCopy = Object.assign({}, this.applicant);
            console.log(data);
          } else {
            console.log("error");
          }
        },
        // On Error
        (err:any) => {
          console.log(err);
          alert(err);
          this.showLoader = false;
        },
        // Finally
        () => {
          this.showLoader = false;
          alert("Applicant saved.");
        });      
  }

  private newApplicant(){
    this.showLoader = true;
    this.employService.newApplicant(this.applicant)
      .subscribe((data: IEmploymentListItem) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            // Save was successfull so update the Copy
            this.applicant = data;  // We have the id now
            this.applicantCopy = Object.assign({}, this.applicant);
            console.log(data);
          } else {
            console.log("error");
          }
        },
        // On Error
        (err:any) => {
          console.log(err);
          alert(err);
          this.showLoader = false;
        },
        // Finally
        () => {
          this.showLoader = false;
          alert("Applicant "+this.applicant.employmentAppId+" created.");
          this.gotoEmployList();
        });      
  }

  public delete()
  {
    alert("Just set the Status to Delete and click Save instead.");
  }

  public gotoEmployList(){
    let link = ['/employ'];
    this.router.navigate(link);
  }

}

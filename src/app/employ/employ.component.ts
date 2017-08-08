import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployService } from './employ.service';
import { IEmploymentListItem } from '../models/employment';
import { AuthenticationService } from '../services/auth.service';

@Component({
  //selector: 'app-products',
  templateUrl: './employ.component.html',
  styleUrls: ['./employ.component.scss']
})
export class EmployComponent implements OnInit {

  public selectedValue : number;
  public applicants : IEmploymentListItem[];
  public showLoader : boolean = false;
  public selectedId : number = -1;
  public selectedApplicant : IEmploymentListItem; 

    constructor(  private authService : AuthenticationService,
                  private route: ActivatedRoute,
                  private employService: EmployService,
                  private router: Router) {
    //this.active = true;
   }

  ngOnInit() {
    // Get applicants for list
    this.getApplicants();
  }

  public selectedRow(applicant:IEmploymentListItem){
    this.selectedId = applicant.employmentAppId;
    this.selectedApplicant = applicant;
  }

  public getApplicants(){
    this.showLoader = true;
    this.employService.getApplicants()
      .subscribe((data: IEmploymentListItem[]) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.applicants = data;
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

  public edit(){
    if ( this.selectedId == -1 )
    {
      alert("Please select an applicant from the list first.");
    }
    else
    {
      let link = ['/employ/'+this.selectedId];
      this.router.navigate(link);    
    }
  }

  public createApplicant(){
    let link = ['/employ/-1'];
    this.router.navigate(link);    
  }

  public editApplication(){
    if ( this.selectedId == -1 )
    {
      alert("Please select an applicant from the list first.");
    }
    else
    {
      let link = ['/application/'+this.selectedApplicant.code];
      this.router.navigate(link);
    }
  
  }

  public emailApplicant(){
    if ( this.selectedId == -1 )
    {
      alert("Please select an applicant from the list first.");
    }
    else
    {
      var eol = "<br /><br />";
      var msgbody = this.selectedApplicant.firstName + " " + this.selectedApplicant.lastName + ":" + eol;
      msgbody += 'Thank you for your interest in the McGill Companies.  Below you will find the information necessary to start the application process.' + eol;
      msgbody += 'Please visit this page to access your application: <a href="http://www.unitedmcgill.com/application/' + this.selectedApplicant.code + '">Online Employment Application Login</a> ' + eol;
      msgbody += 'Your Online Application Code: ' + this.selectedApplicant.code + eol;
      msgbody += 'If you need assistance, please contact the Personnel Services Department.' + eol;
      msgbody += 'Thank you,<br />Personnel Services Department' + eol;
      msgbody += 'United McGill Corporation<br />One Mission Park<br />Groveport, OH 43125<br />Phone: (614) 829-1200<br />Fax: (614) 836-9843<br />Email: <a href="mailto:personnel@unitedmcgill.com">Personnel@unitedmcgill.com</a><br />' + eol;
      msgbody += 'The Company is an equal opportunity employer.' + eol;
      msgbody += 'EEO/m/f/d/v' + eol;

      alert(msgbody);
    }

  }

  public logout() {
    this.authService.logout();
    let link = ['/dashboard'];
    this.router.navigate(link);
  }
}

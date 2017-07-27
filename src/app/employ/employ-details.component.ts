import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployService } from './employ.service';
import { IEmploymentListItem } from '../models/employment';
import { IApplication, SectionA, SectionB } from '../models/application';

@Component({
  //selector: 'app-products',
  templateUrl: './employ-details.component.html',
  styleUrls: ['./employ-details.component.scss']
})
export class EmployDetailsComponent implements OnInit, OnDestroy {

  public applicant : IEmploymentListItem = {
    employmentAppId : 0,
    lastName: '',
    firstName: '',
    status: '',
    code: '' 
  };

  public application : IApplication = {
    employmentAppId : 0,
    lastName: '',
    firstName: '',
    status: '',
    code: '' ,
    sectionA : {
        "employmentAppId": 0,
        "locations": '',
        "otherLocation": '',
        "agreeText": '',
        "agreeTime": 0
    },
    sectionB : {
        "employmentAppId": 0,
        "employBefore": 0,
        "beforeStartMonth": '',
        "beforeStartYear": '',
        "beforeEndMonth": '',
        "beforeEndYear": '',
        "beforeJob": '',
        "beforeSupervisor": '',
        "beforeManager": '',
        "beforeLeave": '',
        "applyBefore": 0,
        "applyDate": '',
        "applyJob": '',
        "mcGillRelatives": 0,
        "relativeNameOne": '',
        "relativeNameTwo": '',
        "relativeNameThree": '',
        "relativeRelationshipOne": '',
        "relativeRelationshipTwo": '',
        "relativeRelationshipThree": '',
        "relativeJobOne": '',
        "relativeJobTwo": '',
        "relativeJobThree": '',
        "relativeLocationOne": '',
        "relativeLocationTwo": '',
        "relativeLocationThree": '',
        "findOut": '',
        "findOutEmployee": '',
        "findOutSite": '',
        "findOutOther": '',
        "mcGillPosition": '', // mcgillPosition
        "mcGillWork": '', // mcgillWork
        "mcGillWorkHours": '',
        "secondShift": 0,
        "thirdShift": 0,
        "startPayHourly": '',
        "startPayYearly": '',
        "startWorking": '',
        "contactEmployer": 0,
        "contactEmployerTime": '',
        "plansGoals": ''    
    }   
  }

  public showLoader : boolean = false;
  public sub :any;

    constructor(  private route: ActivatedRoute,
                  private employService: EmployService,
                  private router: Router) {
    //this.active = true;
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.getApplicant(id);
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

  public gotoEmployList(){
    let link = ['/employ'];
    this.router.navigate(link);
  }

}

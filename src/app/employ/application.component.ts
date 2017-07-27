import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployService } from './employ.service';
import { IApplication, SectionA, SectionB } from '../models/application';

@Component({
  //selector: 'app-products',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, OnDestroy {

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
      let code = params['code']; // Number.parseInt(params['id']);
      this.getApplication(code);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


  public getApplication(code){
    this.showLoader = true;
    this.employService.getApplication(code)
      .subscribe((data: IApplication) => {
          if ( data ){
            // console.log(data);
            // console.log(this.ductConvert);
            // const duct = JSON.stringify(data);
            this.application = data;
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

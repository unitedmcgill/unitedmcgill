import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployService } from './employ.service';
import { IEmploymentListItem} from '../models/employment';
import { ApplicationComponent }          from './application.component';
import { IApplication, SectionA, SectionB, SectionC, SectionD, SectionE, SectionF } from '../models/application';

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

  public yesnoInt = [
    { value: 1, display: 'Yes'},
    { value: 0, display: 'No'}
  ];

  public applicant : IEmploymentListItem = {
    employmentAppId : -1,
    created : 0,
    lastUpdate : 0,
    lastName: '',
    firstName: '',
    status: this.statusTypes[0].value,
    code: '',
    email: '',
    emailSent: 0
  };

  public application : IApplication = {
    employmentAppId : 0,
    created : 0,
    lastUpdate : 0,
    lastName: '',
    firstName: '',
    status: this.statusTypes[0].value,
    code: '' ,
    sectionA : {
        employmentAppId: 0,
        locations: '',
        otherLocation: '',
        agreeText: '',
        agreeTime: 0
    },
    sectionB : {
        employmentAppId: 0,
        employBefore: 0,
        beforeStartMonth: '',
        beforeStartYear: '',
        beforeEndMonth: '',
        beforeEndYear: '',
        beforeJob: '',
        beforeSupervisor: '',
        beforeManager: '',
        beforeLeave: '',
        applyBefore: 0,
        applyDate: '',
        applyJob: '',
        mcGillRelatives: 0,
        relativeNameOne: '',
        relativeNameTwo: '',
        relativeNameThree: '',
        relativeRelationshipOne: '',
        relativeRelationshipTwo: '',
        relativeRelationshipThree: '',
        relativeJobOne: '',
        relativeJobTwo: '',
        relativeJobThree: '',
        relativeLocationOne: '',
        relativeLocationTwo: '',
        relativeLocationThree: '',
        findOut: '',
        findOutEmployee: '',
        findOutSite: '',
        findOutOther: '',
        mcGillPosition: '', // mcgillPosition
        mcGillWork: '', // mcgillWork
        mcGillWorkHours: '',
        secondShift: 0,
        thirdShift: 0,
        startPayHourly: '',
        startPayYearly: '',
        startWorking: '',
        contactEmployer: 0,
        contactEmployerTime: '',
        plansGoals: ''    
    },
    sectionC : {
        employmentAppId: 0,
        fullName: '',
        otherName: '',
        ssn: '',
        lawfullyEmployable: 0,
        overEighteen: 0,
        workPermit: 0,
        presentMiles: '',
        presentStreet: '',
        presentCity: '',
        presentState: '',
        presentZip: '',
        presentTelephone: '',
        presentEmail: '',
        presentStartMonth: '',
        presentStartYear: '',
        permanentStreet: '',
        permanentCity: '',
        permanentState: '',
        permanentZip: '',
        permanentTelephone: '',
        permanentEmail: '',
        previousStreetOne: '',
        previousCityOne: '',
        previousStateOne: '',
        previousZipOne: '',
        previousTelephoneOne: '',
        previousEmailOne: '',
        previousStreetTwo: '',
        previousCityTwo: '',
        previousStateTwo: '',
        previousZipTwo: '',
        previousTelephoneTwo: '',
        previousEmailTwo: '',
        performFunctions: 0,
        emergencyName: '',
        emergencyRelationship: '',
        emergencyTelephone: '',
        emergencyAddress: '',
        travel: 0,
        travelPercentage: '',
        travelComment: '',
        relocate: 0,
        relocateRestrictions: '',
        transportation: '',
        licenseStateOne: '',
        licenseNumberOne: '',
        licenseStateTwo: '',
        licenseNumberTwo: '',
        licenseStateThree: '',
        licenseNumberThree: '',
        licenseStateFour: '',
        licenseNumberFour: '',
        licenseSuspend: 0,
        licenseWhen: '',
        licenseExplain: '',
        insurance: 0,
        crime: 0,
        crimeExplain: '',
        licenseExpirationOne: '',
        licenseExpirationTwo: '',
        licenseExpirationThree: ''   
    },
    sectionD : {
        employmentAppId: 0,
        employerFirst: '',
        employerSecond: '',
        employerThird: '',
        telephoneFirst: '',
        telephoneSecond: '',
        telephoneThird: '',
        addressFirst: '',
        addressSecond: '',
        addressThird: '',
        descriptionFirst: '',
        descriptionSecond: '',
        descriptionThird: '',
        startMonthFirst: '',
        startMonthSecond: '',
        startMonthThird: '',
        startYearFirst: '',
        startYearSecond: '',
        startYearThird: '',
        wageStartFirst: '',
        wageStartSecond: '',
        wageStartThird: '',
        wageStartUnitFirst: '',
        wageStartUnitSecond: '',
        wageStartUnitThird: '',
        positionFirst: '',
        positionSecond: '',
        positionThird: '',
        departmentFirst: '',
        departmentSecond: '',
        departmentThird: '',
        endMonthFirst: '',
        endMonthSecond: '',
        endMonthThird: '',
        endYearFirst: '',
        endYearSecond: '',
        endYearThird: '',
        wageEndFirst: '',
        wageEndSecond: '',
        wageEndThird: '',
        wageEndUnitFirst: '',
        wageEndUnitSecond: '',
        wageEndUnitThird: '',
        raiseMonthFirst: '',
        raiseMonthSecond: '',
        raiseMonthThird: '',
        raiseYearFirst: '',
        raiseYearSecond: '',
        raiseYearThird: '',
        additionWageFirst: '',
        additionWageSecond: '',
        additionWageThird: '',
        additionUnitFirst: '',
        additionUnitSecond: '',
        additionUnitThird: '',
        additionExplainFirst: '',
        additionExplainSecond: '',
        additionExplainThird: '',
        healthCareFirst: 0,
        healthCareSecond: 0,
        healthCareThird: 0,
        otherBenefitsFirst: '',
        otherBenefitsSecond: '',
        otherBenefitsThird: '',
        workFirst: '',
        workSecond: '',
        workThird: '',
        workHoursFirst: '',
        workHoursSecond: '',
        workHoursThird: '',
        obtainFirst: '',
        obtainSecond: '',
        obtainThird: '',
        supervisorFirst: '',
        supervisorSecond: '',
        supervisorThird: '',
        referencesFirst: '',
        referencesSecond: '',
        referencesThird: '',
        dutiesFirst: '',
        dutiesSecond: '',
        dutiesThird: '',
        responsibilityFirst: '',
        responsibilitySecond: '',
        responsibilityThird: '',
        leavingFirst: '',
        leavingSecond: '',
        leavingThird: '',
        otherCompanyOne: '',
        otherCompanyTwo: '',
        otherCompanyThree: '',
        otherStartMonthOne: '',
        otherStartMonthTwo: '',
        otherStartMonthThree: '',
        otherStartYearOne: '',
        otherStartYearTwo: '',
        otherStartYearThree: '',
        otherHoursOne: '',
        otherHoursTwo: '',
        otherHoursThree: '',
        otherPositionOne: '',
        otherPositionTwo: '',
        otherPositionThree: '',
        otherWageOne: '',
        otherWageTwo: '',
        otherWageThree: '',
        otherLeavingOne: '',
        otherLeavingTwo: '',
        otherLeavingThree: '',
        otherAddressOne: '',
        otherAddressTwo: '',
        otherAddressThree: '',
        otherEndMonthOne: '',
        otherEndMonthTwo: '',
        otherEndMonthThree: '',
        otherEndYearOne: '',
        otherEndYearTwo: '',
        otherEndYearThree: '',
        otherSupervisorOne: '',
        otherSupervisorTwo: '',
        otherSupervisorThree: '',
        otherUnitOne: '',
        otherUnitTwo: '',
        otherUnitThree: '',
        unemployedStartMonthOne: '',
        unemployedStartMonthTwo: '',
        unemployedStartMonthThree: '',
        unemployedStartYearOne: '',
        unemployedStartYearTwo: '',
        unemployedStartYearThree: '',
        unemployedEndMonthOne: '',
        unemployedEndMonthTwo: '',
        unemployedEndMonthThree: '',
        unemployedEndYearOne: '',
        unemployedEndYearTwo: '',
        unemployedEndYearThree: '',
        unemployedWeeksOne: '',
        unemployedWeeksTwo: '',
        unemployedWeeksThree: '',
        unemployedTimeOne: '',
        unemployedTimeTwo: '',
        unemployedTimeThree: '',
        unemployedFinanceOne: '',
        unemployedFinanceTwo: '',
        unemployedFinanceThree: '' 
    }, 
    sectionE : {
        employmentAppId: 0,
        schoolNameOne: '',
        schoolNameTwo: '',
        schoolNameThree: '',
        schoolCityOne: '',
        schoolCityTwo: '',
        schoolCityThree: '',
        schoolStateOne: '',
        schoolStateTwo: '',
        schoolStateThree: '',
        startMonthTwo: '',
        startYearTwo: '',
        endMonthTwo: '',
        endYearTwo: '',
        startMonthThree: '',
        startYearThree: '',
        endMonthThree: '',
        endYearThree: '',
        highSchoolHours: '',
        semesterHoursTwo: '',
        semesterHoursThree: '',
        trimesterHoursTwo: '',
        trimesterHoursThree: '',
        quarterHoursTwo: '',
        quarterHoursThree: '',
        graduateOne: 0,
        graduateTwo: 0,
        graduateThree: 0,
        graduateGed: 0,
        graduateMonthTwo: '',
        graduateMonthThree: '',
        graduateYearTwo: '',
        graduateYearThree: '',
        degreeTwo: '',
        degreeThree: '',
        leftPriorOne: '',
        leftPriorTwo: '',
        leftPriorThree: '',
        gpaOne: '',
        gpaTwo: '',
        gpaThree: '',
        gradeOne: '',
        gradeTwo: '',
        gradeThree: '',
        transcriptOne: 0,
        transcriptTwo: 0,
        transcriptThree: 0,
        majorOne: '',
        majorTwo: '',
        majorThree: '',
        minorOne: '',
        minorTwo: '',
        minorThree: '',
        honorsOne: '',
        honorsTwo: '',
        honorsThree: '',
        activitiesOne: '',
        activitiesTwo: '',
        activitiesThree: '',
        accomplishmentsOne: '',
        accomplishmentsTwo: '',
        accomplishmentsThree: '',
        scholarshipTwo: '',
        scholarshipThree: '',
        loanTwo: '',
        loanThree: '',
        workTwo: '',
        workThree: '',
        familyTwo: '',
        familyThree: '',
        typeOne: '',
        typeTwo: '',
        nameOne: '',
        nameTwo: '',
        schoolLocationOne: '',
        schoolLocationTwo: '',
        attendedStartMonthOne: '',
        attendedStartYearOne: '',
        attendedEndMonthOne: '',
        attendedEndYearOne: '',
        attendedStartMonthTwo: '',
        attendedStartYearTwo: '',
        attendedEndMonthTwo: '',
        attendedEndYearTwo: '',
        coursesOne: '',
        coursesTwo: '',
        completeOne: 0,
        completeTwo: 0,
        completeMonthOne: '',
        completeYearOne: '',
        completeMonthTwo: '',
        completeYearTwo: '',
        referenceNameOne: '',
        referenceNameTwo: '',
        referenceNameThree: '',
        referencePositionOne: '',
        referencePositionTwo: '',
        referencePositionThree: '',
        referenceSchoolOne: '',
        referenceSchoolTwo: '',
        referenceSchoolThree: '',
        referenceTelephoneOne: '',
        referenceTelephoneTwo: '',
        referenceTelephoneThree: '',
        referenceEmailOne: '',
        referenceEmailTwo: '',
        referenceEmailThree: '',
        languageRead: '',
        languageWrite: '',
        languageSpeak: '',
        typing: 0,
        speed: '',
        calculator: 0,
        dictation: 0,
        wordProcessing: 0,
        wordProcessingName: '',
        spreadsheet: 0,
        spreadsheetName: '',
        apprenticeship: '',
        apprenticeshipTime: '',
        apprenticeshipLocation: '',
        machineSkills: '',
        otherTraining: '',
        engineerTraining: 0,
        engineerTrainingState: '',
        engineerTrainingDate: '',
        professionalEngineer: 0,
        professionalState: '',
        professionalLicense: '',
        otherLicenses: '',
        memberships: ''        
    },
    sectionF : {
        employmentAppId: 0,
        military: 0,
        militaryStartMonth: '',
        militaryStartYear: '',
        militaryEndMonth: '',
        militaryEndYear: '',
        service: '',
        branch: '',
        startRank: '',
        endRank: '',
        principleDuties: '',
        militaryEducation: '',
        militaryHonors: '',
        militaryNameOne: '',
        militaryNameTwo: '',
        militaryNameThree: '',
        militaryPositionOne: '',
        militaryPositionTwo: '',
        militaryPositionThree: '',
        militarySchoolOne: '',
        militarySchoolTwo: '',
        militarySchoolThree: '',
        militaryTelephoneOne: '',
        militaryTelephoneTwo: '',
        militaryTelephoneThree: '',
        militaryEmailOne: '',
        militaryEmailTwo: '',
        militaryEmailThree: ''  
    }
  }

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
          if (err.status == 401){
            alert("401:  Your session has probably expired.  Logout and login again.");
          }
          else{
            alert(err);
          }
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
        code: this.getNextCode(10),
        email : '',
        emailSent : 0
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
          if (err.status == 401){
            alert("401:  Your session has probably expired.  Logout and login again.");
          }
          else{
            alert(err);
          }
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

            //this.createApplication();

            console.log(data);
          } else {
            console.log("error");
          }
        },
        // On Error
        (err:any) => {
          if (err.status == 401){
            alert("401:  Your session has probably expired.  Logout and login again.");
          }
          else{
            alert(err);
          }
          this.showLoader = false;
        },
        // Finally
        () => {
          this.showLoader = false;
          alert("Applicant "+this.applicant.employmentAppId+" created with application.");
          this.gotoEmployList();
        });    
  }

  private createApplication()
  {
    // Create the application
    this.application.employmentAppId = this.applicant.employmentAppId;
    this.application.created = this.applicant.created;
    this.application.lastName = this.applicant.lastName;
    this.application.firstName = this.applicant.firstName;
    this.application.lastUpdate = 0;
    this.application.status = this.applicant.status;
    this.application.code = this.applicant.code;
    this.application.sectionA.employmentAppId = this.applicant.employmentAppId;
    this.application.sectionB.employmentAppId = this.applicant.employmentAppId;
    this.application.sectionC.employmentAppId = this.applicant.employmentAppId;
    this.application.sectionD.employmentAppId = this.applicant.employmentAppId;
    this.application.sectionE.employmentAppId = this.applicant.employmentAppId;
    this.application.sectionF.employmentAppId = this.applicant.employmentAppId;
    this.employService.saveApplication(this.application)
    .subscribe((data: IApplication) => {
        if ( data ){
          // console.log(data);
          // console.log(this.ductConvert);
          // const duct = JSON.stringify(data);
          // Save was successfull so update the Copy
          // this.application = Object.assign({}, this.application);
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
        // this.showLoader = false;
        // alert("Application saved.");
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

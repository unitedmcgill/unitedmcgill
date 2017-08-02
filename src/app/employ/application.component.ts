import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { EmployService } from './employ.service';
import { IApplication, SectionA, SectionB, SectionC, SectionD, SectionE, SectionF } from '../models/application';

@Component({
  //selector: 'app-products',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit, OnDestroy {

  public yesnoInt = [
    { value: 1, display: 'Yes'},
    { value: 0, display: 'No'}
  ];

  public statusTypes = [
    { value: 'C', display: 'Current' },
    { value: 'D', display: 'Deleted' },
    { value: 'H', display: 'Hide' },
    { value: 'K', display: 'Keep' }
  ];
  
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
        crimeExplain: ''        
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

  public showLoader : boolean = false;
  public sub :any;
  public agree : string = "";
  public created : Date;
  public lastUpdate : Date;

  public airsilence : boolean = false;
  public airflow : boolean = false;
  public airpressure : boolean = false;
  public airclean : boolean = false;
  public umc : boolean = false;
  public tmc : boolean = false;
  public airseal : boolean = false;

  public findOutOther : boolean = false;
  public findOutInternet : boolean = false;
  public findOutCollege : boolean = false;
  public findOutRecruit : boolean = false;
  public findOutEmp : boolean = false;
  public findOutRelative : boolean = false;
  public findOutAgent : boolean = false;
  public findOutNews : boolean = false;
  
  public workFull : boolean = false;
  public workPart : boolean = false;
  public workSummer : boolean = false;

  public workFirstFull : boolean = false;
  public workFirstPart : boolean = false;
  public workSecondFull : boolean = false;
  public workSecondPart : boolean = false;
  public workThirdFull : boolean = false;
  public workThirdPart : boolean = false;

    constructor(  private route: ActivatedRoute,
                  private employService: EmployService,
                  private router: Router) {
    //this.active = true;
   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let code = params['code']; // Number.parseInt(params['id']);
      this.application.code = code;
      this.getApplication(code);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private processWorkXIn(){
    var work = this.application.sectionD.workFirst;
    if (work[0] === '1') {
      this.workFirstFull = true;
    }
    if (work[1] === '1') {
      this.workFirstPart = true;
    }  

    var work = this.application.sectionD.workSecond;
    if (work[0] === '1') {
        this.workSecondFull = true;
    }
    if (work[1] === '1') {
        this.workSecondPart = true;
    }

    var work = this.application.sectionD.workThird;
    if (work[0] === '1') {
        this.workThirdFull = true;
    }
    if (work[1] === '1') {
        this.workThirdPart = true;
    }    
  }

  private processWorkXOut(){
    var work = this.workFirstFull ? '1' : '0';
    work += this.workFirstPart ? '1' : '0';

    if (work !== this.application.sectionD.workFirst) {
        this.application.sectionD.workFirst = work;
    }    

    var work = this.workSecondFull ? '1' : '0';
    work += this.workSecondPart ? '1' : '0';

    if (work !== this.application.sectionD.workSecond) {
        this.application.sectionD.workSecond = work;
    }    

    var work = this.workThirdFull ? '1' : '0';
    work += this.workThirdPart ? '1' : '0';

    if (work !== this.application.sectionD.workThird) {
        this.application.sectionD.workThird = work;
    }    
  }

  private processWorkIn(){
    var work = this.application.sectionB.mcGillWork;
    if (work[0] === '1') {
        this.workSummer = true;
    }
    if (work[1] === '1') {
        this.workPart = true;
    }
    if (work[2] === '1') {
        this.workFull = true;
    }    
  }

  public processWorkOut(){
    var work = this.workSummer ? '1' : '0';
    work += this.workPart ? '1' : '0';
    work += this.workFull ? '1' : '0';

    if (work !== this.application.sectionB.mcGillWork) {
        this.application.sectionB.mcGillWork = work;
    }    
  }

  private processFindOutIn(){
    var findout = this.application.sectionB.findOut;
    if (findout[0] === '1') {
        this.findOutOther = true;
    }
    if (findout[1] === '1') {
        this.findOutInternet = true;             
    }
    if (findout[2] === '1') {
        this.findOutCollege = true;
    }
    if (findout[3] === '1') {
        this.findOutRecruit = true;
    }
    if (findout[4] === '1') {
        this.findOutEmp = true;
    }
    if (findout[5] === '1') {              
        this.findOutRelative = true;
    }
    if (findout[6] === '1') {
        this.findOutAgent = true;
    }
    if (findout[7] === '1') {
        this.findOutNews = true;
    }
  }

  private processFindOutOut(){
    var findout = this.findOutOther ? '1' : '0';
    findout += this.findOutInternet ? '1' : '0';
    findout += this.findOutCollege ? '1' : '0';
    findout += this.findOutRecruit ? '1' : '0';
    findout += this.findOutEmp ? '1' : '0';
    findout += this.findOutRelative ? '1' : '0';
    findout += this.findOutAgent ? '1' : '0';
    findout += this.findOutNews ? '1' : '0';

    if (findout !== this.application.sectionB.findOut) {
        this.application.sectionB.findOut = findout;
    }
  }

  private processLocationsIn(){
    var locations = this.application.sectionA.locations;
    if (locations[0] === '1') {
        this.airsilence = true;
    }
    if (locations[1] === '1') {
        this.airseal = true;
    }
    if (locations[2] === '1') {
        this.airflow = true;
    }
    if (locations[3] === '1') {
        this.airpressure = true;
    }
    // There is no 4
    if (locations[5] === '1') {
        this.airclean = true;
    }
    if (locations[6] === '1') {
        this.umc = true;
    }
    if (locations[7] === '1') {
        this.tmc = true;
    }
  }

  private processLocationsOut(){
    var location;
    
    location = this.airsilence ? '1' : '0';
    location += this.airseal ? '1' : '0';
    location += this.airflow ? '1' : '0';
    location += this.airpressure ? '1' : '0';
    location += '0'; // Not used
    location += this.airclean ? '1' : '0';
    location += this.umc ? '1' : '0';
    location += this.tmc ? '1' : '0';

    if (location !== this.application.sectionA.locations) {
        this.application.sectionA.locations = location;
    }
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
            this.processLocationsIn();
            this.processFindOutIn();
            this.processWorkIn();
            this.processWorkXIn();
            this.created = new Date(this.application.created*1000);  // time() in php was seconds since the Epoch, Date needs ms
            this.lastUpdate = new Date(this.application.lastUpdate*1000);  
            console.log(this.lastUpdate);
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

  private saveApplication(){
    if ( this.agree.length <= 0 ){
      alert("You must type your initials in agreement to save the application.");
      return;
    }

    this.showLoader = true;
    this.processLocationsOut();
    this.processFindOutOut();
    this.processWorkOut();
    this.processWorkXOut();
    this.lastUpdate = new Date();
    this.application.lastUpdate = Math.round(this.lastUpdate.getTime()/1000); // time() in php was seconds since the Epoch, Date gives ms
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
          this.showLoader = false;
          alert("Application saved.");
        });      
  }

  public gotoEmployList(){
    let link = ['/employ'];
    this.router.navigate(link);
  }

}

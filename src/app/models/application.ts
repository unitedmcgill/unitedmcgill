export interface IApplication {
    employmentAppId : number,
    created : number,
    lastUpdate : number,
    lastName: string,
    firstName: string,
    status: string,
    code: string,
    sectionA : SectionA,
    sectionB : SectionB,
    sectionC : SectionC,
    sectionD : SectionD,
    sectionE : SectionE,
    sectionF : SectionF
}

export type SectionA = {
        employmentAppId: number,
        locations: string,
        otherLocation: string,
        agreeText: string,
        agreeTime: number
}

export type SectionB = {
        employmentAppId: number,
        employBefore: number,
        beforeStartMonth: string,
        beforeStartYear: string,
        beforeEndMonth: string,
        beforeEndYear: string,
        beforeJob: string,
        beforeSupervisor: string,
        beforeManager: string,
        beforeLeave: string,
        applyBefore: number,
        applyDate: string,
        applyJob: string,
        mcGillRelatives: number,
        relativeNameOne: string,
        relativeNameTwo: string,
        relativeNameThree: string,
        relativeRelationshipOne: string,
        relativeRelationshipTwo: string,
        relativeRelationshipThree: string,
        relativeJobOne: string,
        relativeJobTwo: string,
        relativeJobThree: string,
        relativeLocationOne: string,
        relativeLocationTwo: string,
        relativeLocationThree: string,
        findOut: string,
        findOutEmployee: string,
        findOutSite: string,
        findOutOther: string,
        mcGillPosition: string, // mcgillPosition
        mcGillWork: string, // mcgillWork
        mcGillWorkHours: string,
        secondShift: number,
        thirdShift: number,
        startPayHourly: string,
        startPayYearly: string,
        startWorking: string,
        contactEmployer: number,
        contactEmployerTime: string,
        plansGoals: string    
}

export type SectionC = {
        employmentAppId: number,
        fullName: string,
        otherName: string,
        ssn: string,
        lawfullyEmployable: number,
        overEighteen: number,
        workPermit: number,
        presentMiles: string,
        presentStreet: string,
        presentCity: string,
        presentState: string,
        presentZip: string,
        presentTelephone: string,
        presentEmail: string,
        presentStartMonth: string,
        presentStartYear: string,
        permanentStreet: string,
        permanentCity: string,
        permanentState: string,
        permanentZip: string,
        permanentTelephone: string,
        permanentEmail: string,
        previousStreetOne: string,
        previousCityOne: string,
        previousStateOne: string,
        previousZipOne: string,
        previousTelephoneOne: string,
        previousEmailOne: string,
        previousStreetTwo: string,
        previousCityTwo: string,
        previousStateTwo: string,
        previousZipTwo: string,
        previousTelephoneTwo: string,
        previousEmailTwo: string,
        performFunctions: number,
        emergencyName: string,
        emergencyRelationship: string,
        emergencyTelephone: string,
        emergencyAddress: string,
        travel: number,
        travelPercentage: string,
        travelComment: string,
        relocate: number,
        relocateRestrictions: string,
        transportation: string,
        licenseStateOne: string,
        licenseNumberOne: string,
        licenseStateTwo: string,
        licenseNumberTwo: string,
        licenseStateThree: string,
        licenseNumberThree: string,
        licenseStateFour: string,
        licenseNumberFour: string,
        licenseSuspend: number,
        licenseWhen: string,
        licenseExplain: string,
        insurance: number,
        crime: number,
        crimeExplain: string        
}

export type SectionD = {
        employmentAppId: number,
        employerFirst: string,
        employerSecond: string,
        employerThird: string,
        telephoneFirst: string,
        telephoneSecond: string,
        telephoneThird: string,
        addressFirst: string,
        addressSecond: string,
        addressThird: string,
        descriptionFirst: string,
        descriptionSecond: string,
        descriptionThird: string,
        startMonthFirst: string,
        startMonthSecond: string,
        startMonthThird: string,
        startYearFirst: string,
        startYearSecond: string,
        startYearThird: string,
        wageStartFirst: string,
        wageStartSecond: string,
        wageStartThird: string,
        wageStartUnitFirst: string,
        wageStartUnitSecond: string,
        wageStartUnitThird: string,
        positionFirst: string,
        positionSecond: string,
        positionThird: string,
        departmentFirst: string,
        departmentSecond: string,
        departmentThird: string,
        endMonthFirst: string,
        endMonthSecond: string,
        endMonthThird: string,
        endYearFirst: string,
        endYearSecond: string,
        endYearThird: string,
        wageEndFirst: string,
        wageEndSecond: string,
        wageEndThird: string,
        wageEndUnitFirst: string,
        wageEndUnitSecond: string,
        wageEndUnitThird: string,
        raiseMonthFirst: string,
        raiseMonthSecond: string,
        raiseMonthThird: string,
        raiseYearFirst: string,
        raiseYearSecond: string,
        raiseYearThird: string,
        additionWageFirst: string,
        additionWageSecond: string,
        additionWageThird: string,
        additionUnitFirst: string,
        additionUnitSecond: string,
        additionUnitThird: string,
        additionExplainFirst: string,
        additionExplainSecond: string,
        additionExplainThird: string,
        healthCareFirst: number,
        healthCareSecond: number,
        healthCareThird: number,
        otherBenefitsFirst: string,
        otherBenefitsSecond: string,
        otherBenefitsThird: string,
        workFirst: string,
        workSecond: string,
        workThird: string,
        workHoursFirst: string,
        workHoursSecond: string,
        workHoursThird: string,
        obtainFirst: string,
        obtainSecond: string,
        obtainThird: string,
        supervisorFirst: string,
        supervisorSecond: string,
        supervisorThird: string,
        referencesFirst: string,
        referencesSecond: string,
        referencesThird: string,
        dutiesFirst: string,
        dutiesSecond: string,
        dutiesThird: string,
        responsibilityFirst: string,
        responsibilitySecond: string,
        responsibilityThird: string,
        leavingFirst: string,
        leavingSecond: string,
        leavingThird: string,
        otherCompanyOne: string,
        otherCompanyTwo: string,
        otherCompanyThree: string,
        otherStartMonthOne: string,
        otherStartMonthTwo: string,
        otherStartMonthThree: string,
        otherStartYearOne: string,
        otherStartYearTwo: string,
        otherStartYearThree: string,
        otherHoursOne: string,
        otherHoursTwo: string,
        otherHoursThree: string,
        otherPositionOne: string,
        otherPositionTwo: string,
        otherPositionThree: string,
        otherWageOne: string,
        otherWageTwo: string,
        otherWageThree: string,
        otherLeavingOne: string,
        otherLeavingTwo: string,
        otherLeavingThree: string,
        otherAddressOne: string,
        otherAddressTwo: string,
        otherAddressThree: string,
        otherEndMonthOne: string,
        otherEndMonthTwo: string,
        otherEndMonthThree: string,
        otherEndYearOne: string,
        otherEndYearTwo: string,
        otherEndYearThree: string,
        otherSupervisorOne: string,
        otherSupervisorTwo: string,
        otherSupervisorThree: string,
        otherUnitOne: string,
        otherUnitTwo: string,
        otherUnitThree: string,
        unemployedStartMonthOne: string,
        unemployedStartMonthTwo: string,
        unemployedStartMonthThree: string,
        unemployedStartYearOne: string,
        unemployedStartYearTwo: string,
        unemployedStartYearThree: string,
        unemployedEndMonthOne: string,
        unemployedEndMonthTwo: string,
        unemployedEndMonthThree: string,
        unemployedEndYearOne: string,
        unemployedEndYearTwo: string,
        unemployedEndYearThree: string,
        unemployedWeeksOne: string,
        unemployedWeeksTwo: string,
        unemployedWeeksThree: string,
        unemployedTimeOne: string,
        unemployedTimeTwo: string,
        unemployedTimeThree: string,
        unemployedFinanceOne: string,
        unemployedFinanceTwo: string,
        unemployedFinanceThree: string        
}

export type SectionE = {
        employmentAppId: number,
        schoolNameOne: string,
        schoolNameTwo: string,
        schoolNameThree: string,
        schoolCityOne: string,
        schoolCityTwo: string,
        schoolCityThree: string,
        schoolStateOne: string,
        schoolStateTwo: string,
        schoolStateThree: string,
        startMonthTwo: string,
        startYearTwo: string,
        endMonthTwo: string,
        endYearTwo: string,
        startMonthThree: string,
        startYearThree: string,
        endMonthThree: string,
        endYearThree: string,
        highSchoolHours: string,
        semesterHoursTwo: string,
        semesterHoursThree: string,
        trimesterHoursTwo: string,
        trimesterHoursThree: string,
        quarterHoursTwo: string,
        quarterHoursThree: string,
        graduateOne: number,
        graduateTwo: number,
        graduateThree: number,
        graduateGed: number,
        graduateMonthTwo: string,
        graduateMonthThree: string,
        graduateYearTwo: string,
        graduateYearThree: string,
        degreeTwo: string,
        degreeThree: string,
        leftPriorOne: string,
        leftPriorTwo: string,
        leftPriorThree: string,
        gpaOne: string,
        gpaTwo: string,
        gpaThree: string,
        gradeOne: string,
        gradeTwo: string,
        gradeThree: string,
        transcriptOne: number,
        transcriptTwo: number,
        transcriptThree: number,
        majorOne: string,
        majorTwo: string,
        majorThree: string,
        minorOne: string,
        minorTwo: string,
        minorThree: string,
        honorsOne: string,
        honorsTwo: string,
        honorsThree: string,
        activitiesOne: string,
        activitiesTwo: string,
        activitiesThree: string,
        accomplishmentsOne: string,
        accomplishmentsTwo: string,
        accomplishmentsThree: string,
        scholarshipTwo: string,
        scholarshipThree: string,
        loanTwo: string,
        loanThree: string,
        workTwo: string,
        workThree: string,
        familyTwo: string,
        familyThree: string,
        typeOne: string,
        typeTwo: string,
        nameOne: string,
        nameTwo: string,
        schoolLocationOne: string,
        schoolLocationTwo: string,
        attendedStartMonthOne: string,
        attendedStartYearOne: string,
        attendedEndMonthOne: string,
        attendedEndYearOne: string,
        attendedStartMonthTwo: string,
        attendedStartYearTwo: string,
        attendedEndMonthTwo: string,
        attendedEndYearTwo: string,
        coursesOne: string,
        coursesTwo: string,
        completeOne: number,
        completeTwo: number,
        completeMonthOne: string,
        completeYearOne: string,
        completeMonthTwo: string,
        completeYearTwo: string,
        referenceNameOne: string,
        referenceNameTwo: string,
        referenceNameThree: string,
        referencePositionOne: string,
        referencePositionTwo: string,
        referencePositionThree: string,
        referenceSchoolOne: string,
        referenceSchoolTwo: string,
        referenceSchoolThree: string,
        referenceTelephoneOne: string,
        referenceTelephoneTwo: string,
        referenceTelephoneThree: string,
        referenceEmailOne: string,
        referenceEmailTwo: string,
        referenceEmailThree: string,
        languageRead: string,
        languageWrite: string,
        languageSpeak: string,
        typing: number,
        speed: string,
        calculator: number,
        dictation: number,
        wordProcessing: number,
        wordProcessingName: string,
        spreadsheet: number,
        spreadsheetName: string,
        apprenticeship: string,
        apprenticeshipTime: string,
        apprenticeshipLocation: string,
        machineSkills: string,
        otherTraining: string,
        engineerTraining: number,
        engineerTrainingState: string,
        engineerTrainingDate: string,
        professionalEngineer: number,
        professionalState: string,
        professionalLicense: string,
        otherLicenses: string,
        memberships: string        
}

export type SectionF = {
        employmentAppId: number,
        military: number,
        militaryStartMonth: string,
        militaryStartYear: string,
        militaryEndMonth: string,
        militaryEndYear: string,
        service: string,
        branch: string,
        startRank: string,
        endRank: string,
        principleDuties: string,
        militaryEducation: string,
        militaryHonors: string,
        militaryNameOne: string,
        militaryNameTwo: string,
        militaryNameThree: string,
        militaryPositionOne: string,
        militaryPositionTwo: string,
        militaryPositionThree: string,
        militarySchoolOne: string,
        militarySchoolTwo: string,
        militarySchoolThree: string,
        militaryTelephoneOne: string,
        militaryTelephoneTwo: string,
        militaryTelephoneThree: string,
        militaryEmailOne: string,
        militaryEmailTwo: string,
        militaryEmailThree: string        
}
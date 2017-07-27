export interface IApplication {
    employmentAppId : number,
    lastName: string,
    firstName: string,
    status: string,
    code: string,
    sectionA : SectionA,
    sectionB : SectionB
}

export type SectionA = {
        "employmentAppId": number,
        "locations": string,
        "otherLocation": string,
        "agreeText": string,
        "agreeTime": number
}

export type SectionB = {
        "employmentAppId": number,
        "employBefore": number,
        "beforeStartMonth": string,
        "beforeStartYear": string,
        "beforeEndMonth": string,
        "beforeEndYear": string,
        "beforeJob": string,
        "beforeSupervisor": string,
        "beforeManager": string,
        "beforeLeave": string,
        "applyBefore": number,
        "applyDate": string,
        "applyJob": string,
        "mcGillRelatives": number,
        "relativeNameOne": string,
        "relativeNameTwo": string,
        "relativeNameThree": string,
        "relativeRelationshipOne": string,
        "relativeRelationshipTwo": string,
        "relativeRelationshipThree": string,
        "relativeJobOne": string,
        "relativeJobTwo": string,
        "relativeJobThree": string,
        "relativeLocationOne": string,
        "relativeLocationTwo": string,
        "relativeLocationThree": string,
        "findOut": string,
        "findOutEmployee": string,
        "findOutSite": string,
        "findOutOther": string,
        "mcGillPosition": string, // mcgillPosition
        "mcGillWork": string, // mcgillWork
        "mcGillWorkHours": string,
        "secondShift": number,
        "thirdShift": number,
        "startPayHourly": string,
        "startPayYearly": string,
        "startWorking": string,
        "contactEmployer": number,
        "contactEmployerTime": string,
        "plansGoals": string    
}
import { SectionA, SectionB, SectionC, SectionD, SectionE, SectionF } from '../models/application';

export interface IEmploymentListItem {
    employmentAppId : number,
    created : number,
    lastUpdate : number,
    lastName: string,
    firstName: string,
    status: string,
    code: string,
    email: string, 
    emailSent: number
    sectionA : SectionA,
    sectionB : SectionB,
    sectionC : SectionC,
    sectionD : SectionD,
    sectionE : SectionE,
    sectionF : SectionF    
}


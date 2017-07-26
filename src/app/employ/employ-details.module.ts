import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';
import { EmployService }             from './employ.service';

import { EmployDetailsComponent }          from './employ-details.component';
import { EmployDetailsRoutingModule }      from './employ-details-routing.module';

@NgModule({
    imports: [
        EmployDetailsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        EmployDetailsComponent
    ],
    providers:[EmployService]
})
export class EmployDetailsModule { }

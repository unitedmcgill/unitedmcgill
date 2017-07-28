import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/tabs';
import { EmployService }             from './employ.service';

import { EmployComponent }          from './employ.component';
import { EmployRoutingModule }      from './employ-routing.module';
import { FilterPipe } from '../shared/filter.pipe';

@NgModule({
    imports: [
        EmployRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        EmployComponent,
        FilterPipe
    ],
    providers:[EmployService]
})
export class EmployModule { }

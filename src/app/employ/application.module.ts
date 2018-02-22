import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';
import { EmployService }             from './employ.service';

import { ApplicationComponent }          from './application.component';
import { ApplicationRoutingModule }      from './application-routing.module';

@NgModule({
    imports: [
        ApplicationRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ApplicationComponent
    ],
    providers:[EmployService]
})
export class ApplicationModule { }

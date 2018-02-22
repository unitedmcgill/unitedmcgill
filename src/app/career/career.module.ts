import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { CareerComponent }       from './career.component';
import { CareerRoutingModule }   from './career-routing.module';

@NgModule({
    imports: [
        CareerRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        CareerComponent 
    ]
})
export class CareerModule { }

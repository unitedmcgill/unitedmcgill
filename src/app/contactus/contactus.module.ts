import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/components/tabs';

import { ContactUsComponent }       from './contactus.component';
import { ContactUsRoutingModule }   from './contactus-routing.module';

@NgModule({
    imports: [
        ContactUsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule
    ],
    declarations: [ 
        ContactUsComponent 
    ]
})
export class ContactUsModule { }

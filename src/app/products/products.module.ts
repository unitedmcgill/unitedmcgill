import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/components/tabs';

import { ProductsComponent }       from './products.component';
import { ProductsRoutingModule }   from './products-routing.module';

@NgModule({
    imports: [
        ProductsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule
    ],
    declarations: [ 
        ProductsComponent 
    ]
})
export class ProductsModule { }

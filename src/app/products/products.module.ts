import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ngx-bootstrap/tabs';

import { ProductsComponent }       from './products.component';
import { ProductsRoutingModule }   from './products-routing.module';

@NgModule({
    imports: [
        ProductsRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule.forRoot()
    ],
    declarations: [ 
        ProductsComponent 
    ]
})
export class ProductsModule { }

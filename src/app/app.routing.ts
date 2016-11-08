import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

//Layouts
import { FullLayoutComponent }      from './layouts/full-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: FullLayoutComponent,
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'dashboard',
                loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'products',
                loadChildren: 'app/products/products.module#ProductsModule'
            },
            {
                path: 'career',
                loadChildren: 'app/career/career.module#CareerModule'
            },
            {
                path: 'customers',
                loadChildren: 'app/customers/customers.module#CustomersModule'
            },
            {
                path: 'location',
                loadChildren: 'app/location/location.module#LocationModule'
            },
            {
                path: 'contactus',
                loadChildren: 'app/contactus/contactus.module#ContactUsModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

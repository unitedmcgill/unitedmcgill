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
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'products',
                loadChildren: './products/products.module#ProductsModule'
            },
            {
                path: 'career',
                loadChildren: './career/career.module#CareerModule'
            },
            {
                path: 'customers',
                loadChildren: './customers/customers.module#CustomersModule'
            },
            {
                path: 'files',
                loadChildren: './files/files.module#FilesModule'
            },
            {
                path: 'location',
                loadChildren: './location/location.module#LocationModule'
            },
            {
                path: 'employ',
                loadChildren: './employ/employ.module#EmployModule'
            },
            {
                path: 'employ-details/:id',
                loadChildren: './employ/employ-details.module#EmployDetailsModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

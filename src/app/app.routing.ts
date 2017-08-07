import { NgModule }                 from '@angular/core';
import { Routes,
         RouterModule }             from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/authguard';

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
                loadChildren: './employ/employ.module#EmployModule',
                canActivate: [AuthGuard]
            },
            {
                path: 'employ/:id',
                loadChildren: './employ/employ-details.module#EmployDetailsModule'
            },
            {
                path: 'application/:code',
                loadChildren: './employ/application.module#ApplicationModule'
            },
            {
                path: 'contactus',
                loadChildren: './contactus/contactus.module#ContactUsModule'
            },
            {   path: 'login',
                component: LoginComponent 
            }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}

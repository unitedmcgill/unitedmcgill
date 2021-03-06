import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { EmployDetailsComponent }   from './employ-details.component';

const routes: Routes = [
    {
        path: '',
        component: EmployDetailsComponent,
        data: {
            title: 'Applicant'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployDetailsRoutingModule {}

import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { EmployDetailsComponent }   from './employ-details.component';

const routes: Routes = [
    {
        path: ':id',
        component: EmployDetailsComponent,
        data: {
            title: 'Employment Details'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployDetailsRoutingModule {}

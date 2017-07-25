import { NgModule }             from '@angular/core';
import { Routes,
         RouterModule }         from '@angular/router';

import { EmployComponent }   from './employ.component';

const routes: Routes = [
    {
        path: '',
        component: EmployComponent,
        data: {
            title: 'Employment App'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmployRoutingModule {}

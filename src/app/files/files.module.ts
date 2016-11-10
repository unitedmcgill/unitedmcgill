import { NgModule }                 from '@angular/core';
import { CommonModule }             from '@angular/common';
import { FormsModule }              from '@angular/forms';
import { TabsModule }               from 'ng2-bootstrap/components/tabs';

import { FilesComponent }       from './files.component';
import { FilesRoutingModule }   from './files-routing.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';

@NgModule({
    imports: [
        FilesRoutingModule,
        CommonModule,
        FormsModule,
        TabsModule
    ],
    declarations: [ 
        FilesComponent,
        FileSelectDirective,
        FileDropDirective
    ]
})
export class FilesModule { }

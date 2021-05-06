import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { components } from "./components";
import { commonServices } from './services';
import { pipes } from "./pipes";

@NgModule({
    declarations: [
        components,
        pipes
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        ModalModule.forChild()
    ],
    exports: [
        components,
        pipes,
        FormsModule
    ]
})

export class SchCommonModule{}
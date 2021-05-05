import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { components } from "./components";
import { commonServices } from './services';

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule
    ],
    exports: [
        components,
        FormsModule
    ]
})

export class SchCommonModule{}
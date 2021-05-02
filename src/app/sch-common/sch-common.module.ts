import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { components } from "./components";

@NgModule({
    declarations: [
        components
    ],
    imports: [
        RouterModule
    ],
    exports: [
        components
    ]
})

export class SchCommonModule{}
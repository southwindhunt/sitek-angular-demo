import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SchCommonModule } from 'src/app/sch-common/sch-common.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { managementServices } from './sch-course-management/services';
import { commonServices } from './sch-common/services';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchCommonModule
  ],
  providers: [managementServices, commonServices],
  bootstrap: [AppComponent]
})
export class AppModule { }

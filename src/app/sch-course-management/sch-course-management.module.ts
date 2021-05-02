import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchCommonModule } from 'src/app/sch-common/sch-common.module';

import { ManagementRoutingModule } from './sch-course-management-routing.module';
import { pages } from './pages';

@NgModule({
  declarations: [
    pages
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule,
    SchCommonModule
  ],
  providers: []
})
export class ManagementModule { }

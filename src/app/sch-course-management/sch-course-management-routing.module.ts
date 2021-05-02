import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchCourseManagementPage } from './pages/sch-course-management.page';
import { SchCoursesPage } from './pages/sch-courses/sch-courses.page';

const routes: Routes = [
    {
        path: '',
        component: SchCourseManagementPage,
        children: [
            {
                path: '',
                component: SchCoursesPage
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ManagementRoutingModule { }
  
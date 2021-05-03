import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchCourseManagementPage } from './pages/sch-course-management.page';
import { SchCoursesPage } from './pages/sch-courses/sch-courses.page';
import { SchInstructorsPage } from './pages/sch-instructors/sch-instructors.page';

const routes: Routes = [
    {
        path: '',
        component: SchCourseManagementPage,
        children: [
            {
                path: 'courses',
                component: SchCoursesPage
            },
            {
                path: 'instructors',
                component: SchInstructorsPage
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ManagementRoutingModule { }
  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchCourseManagementPage } from './pages/sch-course-management.page';
import { SchCoursesPage } from './pages/sch-courses/sch-courses.page';
import { SchInstructorsPage } from './pages/sch-instructors/sch-instructors.page';
import { SchAddCoursePage } from './pages/sch-add-course/sch-add-course.page';

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
            },
            {
                path: 'courses/add',
                component: SchAddCoursePage
            },
            {
                path: 'courses/edit/:id',
                component: SchAddCoursePage
            },
            {
                path: 'courses/edit',
                redirectTo: 'courses/add',
                pathMatch: 'full'
            }
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class ManagementRoutingModule { }
  
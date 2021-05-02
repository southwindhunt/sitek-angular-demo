import { Component } from "@angular/core";

import { BasePage } from "src/app/sch-common/pages/base.page";
import { Course } from '../../../sch-common/models';

@Component({
    selector: 'sch-courses',
    templateUrl: './sch-courses.page.html',
    styleUrls: ['./sch-courses.page.css']
})

export class SchCoursesPage extends BasePage{
    courses: Array<Course> = [
        {
            id: 1,
            readableId : 'CAL001',
            name: 'Calculus 1'
        },
        {
            id: 2,
            readableId : 'BIO001',
            name: 'Basic Biology'
        },
        {
            id: 3,
            readableId : 'BOT001',
            name: 'Basic Botany'
        }
    ];

    editCourse(courseId: number){
        var course = this.courses.find(x=>x.id == courseId);
        if(!course){
            // TODO: Don't just log to the console, give a user friendly error
            console.log('Error with presenting course');
            return;
        }
        console.log('course: ', course);
        return;
    }
    deleteCourse(courseId: number){
        this.courses = this.courses.filter(x=>x.id != courseId);
    }
}


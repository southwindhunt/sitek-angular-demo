import { Component } from "@angular/core";

import { BasePage } from "src/app/sch-common/pages/base.page";
import { Course } from '../../../sch-common/models';
import { CoursesService } from "../../services/courses.service";

@Component({
    selector: 'sch-courses',
    templateUrl: './sch-courses.page.html',
    styleUrls: ['./sch-courses.page.css']
})

export class SchCoursesPage extends BasePage{
    courses: Array<Course> = [];

    constructor(private CoursesService: CoursesService){
        super();
    }

    onChildInit():void{
        this.getCourses();
    }

    getCourses():void{
        this.CoursesService.getCourses().subscribe(res =>{
            this.courses = res;
        }, err =>{
            this.courses = [];
        })
    }

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
        var loadingKey = "deleteCourse";
        this.setLoading(loadingKey, true);
        this.CoursesService.deleteCourse(courseId).subscribe(res =>{
            this.setLoading(loadingKey, false);
            this.getCourses();
        }, err =>{
            this.setLoading(loadingKey, false);
            console.log('there was an error with deleting');
        });
    }
}


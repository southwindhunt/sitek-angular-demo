import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "src/app/sch-common/models";

@Injectable()

export class CoursesService{
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

    getCourses():Observable<Array<Course>>{
        return of(this.courses);
    }

    addCourse(course: Course):Observable<any>{
        this.courses.push(course);
        return of();
    }

    deleteCourse(courseId: number): Observable<Array<Course>>{
        this.courses = this.courses.filter(x=>x.id != courseId);
        return of(this.courses);
    }
}
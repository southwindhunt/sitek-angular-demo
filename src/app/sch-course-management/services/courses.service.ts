import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError } from 'rxjs/operators'
import { Course } from "src/app/sch-common/models";
import { ErrorService } from "src/app/sch-common/services/error.service";

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

    constructor(private errorService: ErrorService){}

    getCourses():Observable<Array<Course>>{
        return of(this.courses);
    }

    getCourse(id: number):Observable<Course>{
        let course = this.findCourseById(id);
        if(course){
            return of(course);
            // return throwError(course).pipe(catchError(val =>{
            //     this.errorService.catchError();
            //     return throwError('I am a thrown error');
            // }));
        }
        else{
            return throwError("There was an error finding the course");
        }
    }

    saveCourse(course: Course):Observable<any>{
        let result;
        if(course.id){
            result = this.updateExistingCourse(course);
        }
        else{
            result = this.addCourse(course);
        }
        return result;
    }

    deleteCourse(courseId: number): Observable<Array<Course>>{
        this.courses = this.courses.filter(x=>x.id != courseId);
        return of(this.courses);
    }

    private findCourseById(id: number): Course|undefined{
        return this.courses.find(x=>x.id == id);
    }

    private addCourse(course: Course): Observable<Course>{
        this.courses.push(course);
        return of(course);
    }

    private updateExistingCourse(course: Course): Observable<any>{
        let existingCourse = this.findCourseById(course.id);
        if(existingCourse){
            existingCourse.name = course.name;
            existingCourse.readableId = course.readableId;
            return of(existingCourse);
        }
        else{
            return throwError("There was an error finding the course");
        }
    }
}
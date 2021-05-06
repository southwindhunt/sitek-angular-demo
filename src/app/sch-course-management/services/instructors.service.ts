import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { Instructor } from "src/app/sch-common/models";
import { Discipline } from "../models/discipline.model";

@Injectable()

export class InstructorsService{
    private instructors: Array<Instructor> = [
        {
            id: 1,
            firstName: 'john',
            lastName: 'doe',
            interests: [],
            discipline: 1,
            courses: []
        },
        {
            id: 2,
            firstName: 'james',
            lastName: 'cassidy',
            interests: ['hockey'],
            discipline: 2,
            courses: []
        }
    ];
    private disciplines: Array<Discipline> = [
        {
            id: 1,
            name: 'Mathematics'
        },
        {
            id: 2,
            name: 'Biology'
        }
    ]

    getInstructors():Observable<Array<Instructor>>{
        return of(this.instructors);
    }

    getInstructor(instructorId: number): Observable<Instructor>{
        let instructor = this.getInstructorById(instructorId);
        if(instructor){
            return of(instructor);
        }
        else{
            return throwError('There was an error finding the instructor');
        }
    }

    getDisciplines():Observable<Array<Discipline>>{
        return of(this.disciplines);
    }

    saveInstructor(instructor: Instructor):Observable<any>{
        let result;
        if(instructor.id){
            result = this.updateExistingInstructor(instructor);
        }
        else{
            result = this.addInstructor(instructor);
        }
        return result;
    }

    deleteInstructor(instructorId: number):Observable<Array<Instructor>>{
        this.instructors = this.instructors.filter(x=>x.id != instructorId);
        return of(this.instructors);
    }

    private getInstructorById(instructorId: number):Instructor|undefined{
        let instructor = this.instructors.find(x=>x.id == instructorId);
        return instructor;
    }

    private addInstructor(instructor: Instructor): Observable<Instructor>{
        instructor.id = this.instructors.length;
        this.instructors.push(instructor);
        return of(instructor);
    }

    private updateExistingInstructor(instructor: Instructor): Observable<any>{
        let existingInstructor = this.getInstructorById(instructor.id);
        if(existingInstructor){
            existingInstructor.firstName = instructor.firstName;
            existingInstructor.lastName = instructor.lastName;
            existingInstructor.discipline = instructor.discipline;
            existingInstructor.interests = instructor.interests;
            return of(existingInstructor);
        }
        else{
            return throwError("There was an error finding the instructor");
        }
    }
}
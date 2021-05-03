import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Instructor } from "src/app/sch-common/models";
import { Discipline } from "../models/discipline.model";

@Injectable()

export class InstructorsService{
    instructors: Array<Instructor> = [
        {
            id: 1,
            firstName: 'john',
            lastName: 'doe',
            discipline: 1,
            courses: []
        },
        {
            id: 2,
            firstName: 'james',
            lastName: 'cassidy',
            discipline: 2,
            courses: []
        }
    ];
    disciplines: Array<Discipline> = [
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

    getDisciplines():Observable<Array<Discipline>>{
        return of(this.disciplines);
    }

    deleteInstructor(instructorId: number):Observable<Array<Instructor>>{
        this.instructors = this.instructors.filter(x=>x.id != instructorId);
        return of(this.instructors);
    }

}
import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { BasePage } from "src/app/sch-common/pages/base.page";
import { Instructor } from '../../../sch-common/models';
import { Discipline } from "../../models";
import { InstructorsService } from "../../services/instructors.service";

@Component({
    selector: 'sch-instructors',
    templateUrl: './sch-instructors.page.html',
    styleUrls: ['./sch-instructors.page.css']
})

export class SchInstructorsPage extends BasePage{
    instructors: Array<Instructor> = [];
    disciplines: Array<Discipline> = [];

    constructor(private instructorsService: InstructorsService, private router: Router){
        super();
    }

    onChildInit(){
        this.getInstructors();
    }

    getInstructors(): void{
        var loadingKey = 'getInstructors';
        this.setLoading(loadingKey, true);
        this.instructorsService.getInstructors().subscribe(res =>{
            this.setLoading(loadingKey, false);
            this.instructors = res;
        }, err =>{
            this.setLoading(loadingKey, false);
            console.log('there was an error in getting instructors');
            this.instructors = [];
        })
    }

    getDisciplines(): void{
        var loadingKey = 'getDisciplines';
        this.setLoading(loadingKey, true);
        this.instructorsService.getDisciplines().subscribe(res =>{
            this.setLoading(loadingKey, false);
            this.disciplines = res;
        }, err =>{
            this.setLoading(loadingKey, false);
            console.log('there was an error in getting disciplines');
            this.disciplines = [];
        })
    }

    editInstructor(instructorId: number){
        if(instructorId === 0){
            // TODO: Don't just log to the console, give a user friendly error
            console.log('Error with presenting instructor');
            return;
        }
        this.router.navigate(['/management', 'instructors', 'edit', instructorId]);
        return;
    }
    deleteInstructor(instructorId: number){
        var loadingKey = 'deleteInstructor';
        this.setLoading(loadingKey, true);
        this.instructorsService.deleteInstructor(instructorId).subscribe(res =>{
            this.setLoading(loadingKey, false);
            this.getInstructors();
        }, err =>{
            this.setLoading(loadingKey, false);
            console.log('there was an error in deleting instructor');
            this.getInstructors();
        })
    }
}


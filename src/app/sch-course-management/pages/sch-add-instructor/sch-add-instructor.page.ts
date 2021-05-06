import { Component } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Instructor } from "src/app/sch-common/models";
import { BasePage } from "src/app/sch-common/pages/base.page";
import { InstructorsService } from "../../services/instructors.service";

@Component({
    selector: 'sch-add-instructor',
    templateUrl: './sch-add-instructor.page.html'
})

export class SchAddInstructorPage extends BasePage{

    constructor(private instructorService: InstructorsService, private route: ActivatedRoute, private router: Router){
        super();
    }

    addInstructorForm: FormGroup =  new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
        'discipline': new FormControl(null, Validators.required),
        'interests': new FormArray([])
    });

    get interests(){
        return (<FormArray>this.addInstructorForm.get('interests'));
    }

    disciplines: any;

    onChildInit(){
        if(+this.route.snapshot.params['id']){
            this.instructorService.getInstructor(+this.route.snapshot.params['id']).subscribe(res =>{
                if(res){
                   this.addInstructorForm.patchValue({
                       'firstName': res.firstName,
                       'lastName': res.lastName,
                       'discipline': res.discipline
                    });
                    for(let interest of res.interests){
                        (<FormArray>this.addInstructorForm.get('interests')).controls.push(new FormControl(interest));
                    }
                }
            });
        }

        this.instructorService.getDisciplines().subscribe(res =>{
            this.disciplines = res;
        });
    }

    addInterest(){
        (<FormArray>this.addInstructorForm.get('interests')).push(new FormControl(null));
    }
    
    removeInterest(){
        (<FormArray>this.addInstructorForm.get('interests')).controls.pop();
    }

    onSubmit(){
        this.instructorService.saveInstructor(this.addInstructorForm.value as Instructor).subscribe(res =>{
            this.router.navigate(['management', 'instructors']);
        }, err=>{
            console.log('We had an error on save');
        });
    }

}
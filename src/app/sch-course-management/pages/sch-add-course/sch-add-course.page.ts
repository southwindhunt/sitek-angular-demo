import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "src/app/sch-common/models";
import { BasePage } from "src/app/sch-common/pages/base.page";
import { CoursesService } from "../../services/courses.service";

@Component({
    'selector': 'sch-add-course',
    'templateUrl': './sch-add-course.page.html'
})

export class SchAddCoursePage extends BasePage{

    course: Course = {
        id: 0,
        name: '',
        readableId: ''
    };

    constructor(private courseService: CoursesService, private route: ActivatedRoute, private router: Router){
        super();
    }

    onChildInit(){
        if(+this.route.snapshot.params['id']){
            this.courseService.getCourse(+this.route.snapshot.params['id']).subscribe(res =>{
                if(res){
                    this.course = res;
                }
            });
        }
    }

    saveCourse(){
        this.courseService.saveCourse(this.course).subscribe(res =>{
            this.router.navigate(['management', 'courses']);
        }, err=>{
            console.log('We had an error on save');
        });
    }

}
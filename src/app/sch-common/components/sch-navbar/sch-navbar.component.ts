import { Component } from "@angular/core";
import { AuthService } from "../../services/auth.service";


@Component({
    selector: 'sch-navbar',
    templateUrl: './sch-navbar.component.html',
    styleUrls: ['./sch-navbar.component.css']
})

export class SchNavbarComponent{

    isLoggedIn = false;

    constructor(private authService: AuthService){}

    onInit(){
        if(this.authService.username){
            this.isLoggedIn = true;
        }
    }
}
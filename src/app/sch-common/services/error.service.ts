import { Injectable } from "@angular/core";

@Injectable()

export class ErrorService{

    public catchError(){
        console.error('A modal would appear now');
    }
}
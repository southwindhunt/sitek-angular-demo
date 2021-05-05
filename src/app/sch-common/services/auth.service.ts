import { Injectable } from "@angular/core";

@Injectable()

export class AuthService{

    private availableUsers = [
        {
            username: 'samuel',
            password: 'samuel'
        },
        {
            username: 'kurt',
            password: 'kurt'
        },
        {
            username: 'john',
            password: 'john'
        }
    ]

    username?: string;

    logIn(username: string, password: string){
        if(this.availableUsers.find(x=> username == x.username && password == x.password)){
            return true;
        }
        else{
            return false
        }
    }
    logOut(){
        this.username = '';
    }
}
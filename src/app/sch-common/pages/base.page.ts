import { Component, OnInit } from "@angular/core";

@Component({
    template: 'base-page'
})

export abstract class BasePage implements OnInit{

    isLoading: boolean = false;
    loadingList: Map<string, boolean> = new Map<string, boolean>();

    abstract onChildInit(): void;
    ngOnInit(){
        this.onChildInit();
    }

    setLoading(loadingKey: string, value: boolean): void{
        this.loadingList.set(loadingKey, value);
        if(value){
            this.isLoading = true;
        }
        else{
            this.updateOverallLoading();
        }
    }

    checkLoading(loadingKey: string): boolean{
        return this.loadingList.get(loadingKey) || false;
    }

    private updateOverallLoading():void{
        var stillLoading = false;
        this.loadingList.forEach((value, key)=>{
            if(value){
                stillLoading = true;
            }
        });
        this.isLoading = stillLoading;
    }
}
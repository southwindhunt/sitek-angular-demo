export abstract class BasePage{

    isLoading: boolean = false;
    loadingList: Map<string, boolean> = new Map<string, boolean>();

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
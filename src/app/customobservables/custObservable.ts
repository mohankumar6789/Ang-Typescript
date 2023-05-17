export class CustObservable{
    subscribers = [];
    
    constructor(sub: any){
        setTimeout(() => {
            sub(this);
        } , 0);
    }
    
    subscribe() {
        this.subscribers.push();
    }

    next(){
        this.subscribers.forEach(x => {
        })
    }
}
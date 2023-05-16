import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})

export class ObservableComponent {
  test$;
  constructor() {
    this.test$ = this.fromEvent(document.body, 'click')
    .subscribe(x => {
      console.log("body Clicked")
    })
  }

  remove(){
    this.test$.unsubscribe();
  }
  
  fromEvent(target: HTMLElement, eventName: string) {
    return new Observable((observer) => {
      const handler = (e: any) => observer.next(e);
      target.addEventListener(eventName, handler);

      return () => {
        console.log("unsubcribe clicked")
        target.removeEventListener(eventName, handler);
      };
    });
  }
}

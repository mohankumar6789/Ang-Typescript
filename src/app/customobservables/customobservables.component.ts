import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustObservable } from './custObservable';

@Component({
  selector: 'app-customobservables',
  templateUrl: './customobservables.component.html',
  styleUrls: ['./customobservables.component.scss']
})

export class CustomobservablesComponent {
name = "Angular"
  
  constructor() {
    const check$ = new CustObservable((sub: { next: (arg0: string) => void; }) => {
      sub.next("this.name");
      sub.next("Kumar");
    });

    // check$.subscribe((x: any) => {
    //   console.log("1", x);
    // });

    // check$.subscribe((x: any) => {
    //   console.log("2", x);
    // });

    const  test$ = new Observable(sub =>{
      sub.next('this.name');
      sub.next('Surendran');
    });

    const _this = this;

    test$.subscribe(x =>{
      console.log('1', _this.name);
    });
    
    test$.subscribe(y =>{
      console.log('2', y);
    });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {
  empID: number;
  empName: string;
    constructor(){
      this.empName = 'Mohan';
      this.empID = 3499;
    }
    getSalary() : number{
      return 40000;
    }
}

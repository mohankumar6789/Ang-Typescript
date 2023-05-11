import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void {}
  title = 'angtypescript';
  
  //Variables in Typescript
  message: string = "Welcome to Typescript";
  name: string = "The Employee name is Mohankumar"
  empid: number = 3499;
 
  //Operators in Typescript
  outputResult:number = this.addFunction(10, 10);
  addFunction(num1:number, num2:number){
    this.outputResult = num1 + num2;
    return this.outputResult;
  }

  outputResult1:number = this.addSubtraction(30, 10);
  addSubtraction(num1:number, num2:number){
    this.outputResult1 = num1 - num2;
    return this.outputResult1;
  }

  outputResult2:number = this.addMultiplication(5, 4);
  addMultiplication(num1: number, num2: number){
    this.outputResult2 = num1 * num2;
    return this.outputResult2;
  }

  outputResult3:number = this.addDivision(200, 10);
  addDivision(num1: number, num2: number){
    this.outputResult3 = num1 / num2;
    return this.outputResult3;
  }

  outputResult4:Boolean = this.andFunction(20, 90);
  andFunction(avg:number, percent:number){
    this.outputResult4 = ((avg < percent) && (percent > avg));
    return this.outputResult4;
  }

  outputResult5:Boolean = this.orFunction(20, 90);
  orFunction(avg:number, percent:number){
    this.outputResult5 = ((avg > percent) || (percent < avg));
    return this.outputResult5;
  }

  outputResult6:Boolean = this.notFunction(20, 90);
  notFunction(avg:number, percent:number){
    this.outputResult6 = (! (avg > percent) || (percent < avg));
    return this.outputResult6;
  }

  outputResult7:Boolean = this.greaterFunction(20, 90);
  greaterFunction(num1:number, num2:number){
    this.outputResult7 = !(num1 === num2);
    return this.outputResult7;
  }
}






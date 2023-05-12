import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  ngOnInit(): void { }
  title = 'angtypescript';

  //Variables in Typescript
  message: string = "Welcome to Typescript";
  name: string = "The Employee name is Mohankumar"
  empid: number = 3499;

  //Operators in Typescript
  outputResult: number = this.addFunction(10, 10);
  addFunction(num1: number, num2: number) {
    this.outputResult = num1 + num2;
    return this.outputResult;
  }

  outputResult1: number = this.addSubtraction(30, 10);
  addSubtraction(num1: number, num2: number) {
    this.outputResult1 = num1 - num2;
    return this.outputResult1;
  }

  outputResult2: number = this.addMultiplication(5, 4);
  addMultiplication(num1: number, num2: number) {
    this.outputResult2 = num1 * num2;
    return this.outputResult2;
  }

  outputResult3: number = this.addDivision(200, 10);
  addDivision(num1: number, num2: number) {
    this.outputResult3 = num1 / num2;
    return this.outputResult3;
  }

  outputResult4: Boolean = this.andFunction(20, 90);
  andFunction(avg: number, percent: number) {
    this.outputResult4 = ((avg < percent) && (percent > avg));
    return this.outputResult4;
  }

  outputResult5: Boolean = this.orFunction(20, 90);
  orFunction(avg: number, percent: number) {
    this.outputResult5 = ((avg > percent) || (percent < avg));
    return this.outputResult5;
  }

  outputResult6: Boolean = this.notFunction(20, 90);
  notFunction(avg: number, percent: number) {
    this.outputResult6 = (!(avg > percent) || (percent < avg));
    return this.outputResult6;
  }

  outputResult7: Boolean = this.greaterFunction(20, 90);
  greaterFunction(num1: number, num2: number) {
    this.outputResult7 = !(num1 === num2);
    return this.outputResult7;
  }

  outputResult8: any = this.relationFunction(20, 900);
  relationFunction(a: number, b: number) {
    this.outputResult8 = (a = b);
    return this.outputResult8;
  }

  outputResult9: any = this.relationFunction1(20, 900);
  relationFunction1(a: number, b: number) {
    this.outputResult9 = (a += b);
    return this.outputResult9;
  }

  outputResult10: any = this.relationFunction2(90, 90);
  relationFunction2(a: number, b: number) {
    this.outputResult10 = (a -= b);
    return this.outputResult10;
  }

  outputResult11: any = this.relationFunction3(90, 90);
  relationFunction3(a: number, b: number) {
    this.outputResult11 = (a *= b);
    return this.outputResult11;
  }

  outputResult12: any = this.relationFunction4(10);
  relationFunction4(n: number) {
    for (let i = 0; i < n; i++) {
      this.outputResult12 = i;
    }
    return this.outputResult12;
  }

  // outputResult13: any = this.relationFunction5(6);
  // relationFunction5(n: number) {
  //   let i = 0;
  //   while (i < n) {
  //     this.outputResult13 = i;
  //     i++;
  //   } 
  //   return this.outputResult13;
  // }

  testloop = new Array(5);

  res:string = "Typescript Functions"
  myfunction(){
    return this.res;
  }

  // result:string = "Typescript Functions"
  // greeting: string = function(this: any){
  //   return this.result;
  //  }
  //  greeting().
}

var i;
for (i = 0; i <= 5; i++) {
  console.log("Execute the For-loop", i);
}

let j: number = 0;
while (j <= 5) {
  console.log("Excute of While-loop", j);
  j++;
}

let n: number = 0;
do {
  console.log("Execute of do-while", n);
  n++;
} while (n <= 5)

var m:number = 1;
while(m<=5){
  if (m%2 == 0){
    console.log("Break Value", m);
    break;
  }
  m++;
}

let h:number =10;
if(h%3 == 0){
  console.log("True");
}
else{
  console.log("False");
}

var num:number = 0;
var countw:number = 0;

for(num=0;num<=10;num++){
  if(num%2==0){
    continue;
  }
  countw ++;
}
console.log("Odd Values", +countw);

//Named Function
function display(){
  console.log("Typescript Functions");
}
display();

//Anamayous Function
let greeting = function(){
  console.log("Welcome to Typescript");
} 
greeting();

let res;
let sum = (x: number, y: number): number => {
  return res = x + y;
}
sum(10, 30);
console.log(res);

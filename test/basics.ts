export  {}

let name = "Nika Popova";
console.log(`Hello ${name}`)

let a = 10;
a = 20

let x = 10;

let num1: number = 10;

let myName: string = "Nika";

let learningTypeScript: boolean = true;

let u: undefined = undefined;
let n: null = null;

let y;
console.log(y)

let j = null;
console.log(j)


//arrays

let list1: number[] = [1, 2, 3 ]
let list2: Array<number> = [1, 2, 3];

console.log(list1[1])

//tuple

let tuple1: [number, string];
tuple1 =[10, 'hello'];
//tuple1 =['hello' , 10 ]; - error
console.log(tuple1[1].substring(3))


//enum 
enum Color {Blue=7, Green=9, White=0, }
// let c: Color = Color.White
// console.log(c)

let colorName: string = Color[9];
console.log(colorName);


//unknow
let notSure: unknown= 3;
console.log(notSure)

//any
let anyVal: any;
anyVal = 10;
anyVal = 'hello';
anyVal = true

//void
function myFun(): void{
    console.log('hello')
}


//union types
let peopleAllowed: number|boolean
peopleAllowed = 10;
peopleAllowed = false;



// function
function hello(){
    console.log("Hello")
}
hello()

function sum(num1: number, num2: number = 10): number{
    if(num2)
    return num1+num2
    else 
    return num1
}
console.log(sum(5, 14))

// interface

interface employee{
    firstName: string;
    lastName: string;
    ID: number
}

function getEmployeeDetails(empDetails: employee){
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);
}

getEmployeeDetails({
    firstName: "Nika",
    lastName: "Popova",
    ID: 1001
})


// classes

class Employee {
 employeeName: string;
    constructor(name){
        this.employeeName = name
    }
    hello(){
        console.log(`Hello ${this.employeeName}`)
    }
}

let emp1 = new Employee("Nika");
console.log(emp1.employeeName)
emp1.hello()



class Manager extends Employee{
    constructor(name){
        super(name)
    }
greet(){
    console.log(`Hello from maneger ${this.employeeName}`)
}
}
let manager1 = new Manager("Luk")
console.log(manager1.employeeName)
manager1.hello();
manager1.greet();

// Public - can be accessed from outside the class
// Private - cannot be accessed from outside the class
// Protected - can be acessed within class and derived

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var name = "Nika Popova";
console.log("Hello ".concat(name));
var a = 10;
a = 20;
var x = 10;
var num1 = 10;
var myName = "Nika";
var learningTypeScript = true;
var u = undefined;
var n = null;
var y;
console.log(y);
var j = null;
console.log(j);
//arrays
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1[1]);
//tuple
var tuple1;
tuple1 = [10, 'hello'];
//tuple1 =['hello' , 10 ]; - error
console.log(tuple1[1].substring(3));
//enum 
var Color;
(function (Color) {
    Color[Color["Blue"] = 7] = "Blue";
    Color[Color["Green"] = 9] = "Green";
    Color[Color["White"] = 0] = "White";
})(Color || (Color = {}));
// let c: Color = Color.White
// console.log(c)
var colorName = Color[9];
console.log(colorName);
//unknow
var notSure = 3;
console.log(notSure);
//any
var anyVal;
anyVal = 10;
anyVal = 'hello';
anyVal = true;
//void
function myFun() {
    console.log('hello');
}
//union types
var peopleAllowed;
peopleAllowed = 10;
peopleAllowed = false;
// function
function hello() {
    console.log("Hello");
}
hello();
function sum(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(sum(5, 14));
function getEmployeeDetails(empDetails) {
    console.log(empDetails.firstName);
    console.log(empDetails.lastName);
    console.log(empDetails.ID);
}
getEmployeeDetails({
    firstName: "Nika",
    lastName: "Popova",
    ID: 1001
});
// classes
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.hello = function () {
        console.log("Hello ".concat(this.employeeName));
    };
    return Employee;
}());
var emp1 = new Employee("Nika");
console.log(emp1.employeeName);
emp1.hello();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name) {
        return _super.call(this, name) || this;
    }
    Manager.prototype.greet = function () {
        console.log("Hello from maneger ".concat(this.employeeName));
    };
    return Manager;
}(Employee));
var manager1 = new Manager("Luk");
console.log(manager1.employeeName);
manager1.hello();
manager1.greet();
// Public - can be accessed from outside the class
// Private - cannot be accessed from outside the class
// Protected - can be acessed within class and derived

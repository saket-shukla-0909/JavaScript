//  Operators and Expression

console.log("JavaScript in Operators");

// Arithmetic Operator
console.log("Arithmetic Operator");

let a = 10;
let b = 4;

console.log("Addition of a and b is:", a+b);
console.log("Substraction of a and b is: ", a-b);
console.log("Multiplication of a and b is: ", a*b);
console.log("Division of a and b is: ", a/b);
console.log("Modulo of a and b is: ", a%b);
console.log("exponent of a and b is: ", a**b); // we can say that a to the power b is:


// Unary Operator
console.log("Unary Operator")

let c = 30;

console.log("Post-increment of c is: ", (c++) );
console.log("Pre-increment of c is: ", (++c));

let d = 40;
console.log("Post-decrement of d is: ", (d--));
console.log("Pre-decrement of d is: ", (--d));


// Assignment Operator
console.log("Assigment Operator")

 let e = 23;
 let f = e;
 console.log("The value of f after assigning from variable e is: ", f);

 let g = 23;
 let h = 7;
 let i = 4;
 let j = 2;
 let k = 2;
 let l = 10;
 let m = 2
 console.log("+= assignment operator");
 console.log("g+=h: ", g+=h);

 console.log("-= assignment operator");
 console.log("g-=i: ", g-=i);

 console.log("=* assignment operator");
 console.log("g*=j: ", g*=j);

 console.log("/= assignment operator");
 console.log("g/=k: ", g/=k);

 console.log("%= assignment operator");
 console.log("g%=l: ", g%=l);

 console.log("**= assignment operator");
 console.log("g**=m: ", g**=m);


// Comparision Operator

console.log("Comparision Operator");

var a1 = 5;
var a2 = 5;
var a3 = 4;
var a4 = 3;
var a5 = 7;
var a6 = 6;
var a7 = 7.5;
console.log("Equal to operator, a1==a1: ", a1==a1);
console.log("Not equal to operator, a1!=a3: ", a1!=a3);
console.log("Greater a1>a4: ", a1>a4);
console.log("Less a1<a5: ", a1>a5);
console.log("Greater than equal to a1>=a4: ", a1>=a4);
console.log("Less than equal to a1<=a5: ", a1<=a5);
console.log("equal type variable a1===a6: ", a1===a6);
console.log("Not equal type variable a1!==a7: ", a1!==a7);

// Logical Operator

console.log("Logical Operartor")

let x = 5;
let y = 6;


console.log("AND Operator (x<y && x==5): ", x<y && x==5);
console.log("OR Operator (x<y || y==6): ", x<y || y==6);

console.log("Not Operator (true): ", !true);
console.log("Not Operator (false): ", !false);

// Ternary Operator
console.log("Ternary Operator")
var n1 = 15;
var n2 = 18;
console.log(n1>n2?n1+"is smaller":n2+"is greater");

//Comments in JavaScript

console.log("For single line comment we use (//) ");
console.log("For Multiple line comment we use (/* */) ");
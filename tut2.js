//  Diiference between Var, Let and Const

console.log("JavaScript Tutorial 2 : var, let and const" );

// Var
var a = 45;
var b = "Harry";
var c = null;
var d = undefined;
{
    console.log(a)
    var b = 'this';
    console.log(b);
}
console.log(b);

// Let
let e = 45;
let f = "Harry";
let g = null;
let h = undefined;
{
    console.log(e)
    f = 22;
    console.log(f);
}
console.log(f);


// Const

const a = 20;

{
    console.log(a)
}
console.log(a);
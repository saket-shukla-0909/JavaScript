console.log("There are the seven types of primitve data types in javascript");
console.log("NN,BB,SS,U")

// Null
let a ;
const b = null;
console.log(typeof(a));
console.log(b);

// Not a Number
let c = a%5;
console.log(c)

//  BigInt
let d = BigInt("657")+BigInt("497");
console.log(d);

// Boolean
let e = true;
console.log(typeof(e));

//Symbol
let f = Symbol("This is a symbol");

// String
let h = "SitaRam";
console.log(typeof(h));

// undefined

let g ;
console.log(g);



// Non- primitive data type - Objects in javascript
console.log("Objects in javascript is non-primitive data types. It stores the data in key value pair");

const student = {
    name:"Harshit",
    friend:"Saket",
    age: 24,
    address: "Noida",
    education: "MCA"
}
console.log(student);
console.log(student["address"]);
console.log(student["age"]);
console.log(student["friend"]);
console.log(student["name"]);
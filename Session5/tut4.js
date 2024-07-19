//Map() Method
let arr = [45,23,21];
console.log(arr);

// Both are same 

// Map creates a new array by performing operation on each element 
arr.map((value)=>{
    console.log("Map",value);
})

// forEach is used to perform action on exiting array element
arr.forEach((value)=>{
    console.log("For Each",value)
})

let a = arr.map((value, index, array)=>{
    console.log(index+" : "+value+" : "+array);
    return value + 1;
})
console.log(a);

arr.forEach((value, index, array)=>{
    console.log(index+" : "+value+" : "+array);
})

// Array filter() Method - It is used to filter out an array element

let arr2 = [45,23,21,0,3,10,9,81];

let a2 = arr2.filter((value)=>{
    return value<10;
    console.log(value);
})
console.log(a2);

// Array reduce() Method

let arr3 = [45,23,2,51,69,4,9];

// Add using reduce() Method
let add = arr3.reduce((n1,n2)=>{
    return n1+n2;
})
console.log(add);

// Substract using reduce() Method
let substract = arr3.reduce((n1,n2)=>{
    return n1-n2;
})
console.log(substract);

// Multiply using reduce() Method
let multiply = arr3.reduce((n1,n2)=>{
    return n1*n2;
})
console.log(multiply);

// Divide using reduce() Method
let divide = arr3.reduce((n1,n2)=>{
    return n1/n2;
})
console.log(divide);
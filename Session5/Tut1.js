// Array

// Array is a object in Javascript. Arrays are mutable. It can be changed
// Strings are immutable. It cannot be changed

console.log("Array is a container which holds large number of Heterogenious type of data. In array index starts from zero and ends at (length-1).")
console.log("More than one value can store inside a array")

let Marks = [61,82,93,44,65];
console.log(Marks)
console.log(Marks[0]);
console.log(Marks[1]);
console.log(Marks[2]);
console.log(Marks[3]);
console.log(Marks[4]);
console.log(Marks[5]); //undefined because index six doesn't exit
console.log("The Length of Marks of Class 10th is: ",Marks.length);
Marks[5] = 85;
console.log("The Length of Marks of Class 10th is: ",Marks.length);
console.log(Marks[5]);
// Now Marks[5] are existing after initializing
for(let j=0;j<Marks.length;j++){
    console.log(Marks[j]);
}

// Now Changing the marks og all student
Marks[0] = 91;
Marks[1] = 92;
Marks[2] = 93;
Marks[3] = 94;
Marks[4] = 95;
Marks[5] = 96;
Marks[6] = 97;
console.log(Marks[0]);
console.log(Marks[1]);
console.log(Marks[2]);
console.log(Marks[3]);
console.log(Marks[4]);
console.log(Marks[5]);
console.log(typeof(Marks))


for(let i=0;i<Marks.length;i++){
    console.log(Marks[i]);
}
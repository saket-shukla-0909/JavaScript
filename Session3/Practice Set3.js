// Que 1.> write a program to print the marks of a student in an object using for loop

let Marks = {
    "Ram": 80,
    "Sita": 90,
    "Radhe": 90,
    "Krishna":95
}

for(let i=0;i<Object.keys(Marks).length;i++){
    console.log("The Marks of "+Object.keys(Marks)[i]+ " are "+ Marks[Object.keys(Marks)[i]]);
}

// Que 2.> write a program to print the marks of a student in an object using for In loop

for(a in Marks){
    console.log("The marks of "+a+" is:"+Marks[a]);
}

// Que 3.> Write a program to print "Try Again" until the user enters the correct number?

// let CN = 4;
// let i;
// while(i!=CN){
//     i = prompt("Enter the value of i: ");
//     console.log("Try Again");
// }
console.log("You have entered a correct number");

// Que 4.> Write a Function to find mean of 5 numbers?

const Mean=(a,b,c,d)=>{
    return (a+b+c+d)/4;
}

console.log("Mean of a,b,c and d is: ",Mean(4,6,8,10))
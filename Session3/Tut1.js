// Loop in JavaScript
console.log("Loop - is a block of code which is used to repeat the code or statement which is inside the block whenever the condition is not satisfied");

console.log("There are six types of Loop")
console.log("first - While Loop.\n second - Do While.\n third - For Loop.\n four - For In Loop.\n five - For Off.\n six - For Each.")

// While Loop

console.log("While loop is also known as entry controlled loop because first condition is checked after then the body of the loop excute");
let i = 0;
while(i<10){
    console.log("Radhe Krishna ",i);
    i++;
}

// Do While Loop

console.log("Do While Loop is also known as exit controlled loop because first body of the loop execute after then the condition is checked")

do{
    console.log("Sita Ram",i)
    i++;
}
while(i<10)


// For Loop 

console.log("For Loop is also known as entry controlled loop because first condition is checked after then the body of the loop execute")

for(j=0;j<=10;j++){
    console.log("Radhe Shyam Sita Ram", j);
}

// For in Loop 

let Marks ={
    saket: 40,
    madhav: 90,
    prachi: 99,
    harshit: 75
}
for(let a in Marks){
    console.log("Marks of "+a+" is "+Marks[a]);
    // Here a is representing the key {saket, Madhav, Prachi, Harshit}
    // Marks[a] is representing the value {40,90,99,75}
}

// For Off
for(let b of "saket"){
    console.log(b);
}
for(let c of "madhav"){
    console.log(c);
}
for(let d of "prachi"){
    console.log(d);
}
for(let e of "harshit"){
    console.log(e);
}

// Loop

// For Loop

let num = [1,22,3,65,29,41,82];
for(let i=0;i<num.length;i++){
    console.log(num[i]);
}

// ForEach loop it
num.forEach((element)=>{
    console.log(element*element)
})

//Array From - It is used to make string

let name = "Harry";
let arr = Array.from(name);
console.log(arr);

// For Of 
for(let i of num){
    console.log(i);
}

// For In - returns in key value pair key index and value elements
for(let i in num){
    console.log(i,num[i])
}

// For Each take three parameter  
let j = ["a",1,"b",65,"c",66];
j.forEach((value,index,array)=>{
    console.log(index+" : "+value+" : "+array)
})
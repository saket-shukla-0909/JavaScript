
//Que 1.) Write a program to find the character of word 
let friend = "GauravPandey";
for(let i=0;i<friend.length;i++){
    console.log(friend[i]);
}    

//Que 2.) What will the following print in Javascript?
//             Console.log("her\"".length)

    console.log("her\"".length);

// Quw 3.) Explore the include, startsWith & endsWith function of a String

    let name = "Saket shukla";
    let age = 24;
    let sentence = `My name is ${name} and my age is ${age} Ram`
    console.log(sentence);
    console.log(sentence.includes("name"));
    console.log(sentence.startsWith("My"));
    console.log(sentence.endsWith("Ram"));

// Que 4.) Write a program to convert a given string in to Lower Case 

    let fruits = "MANGO";
    console.log(fruits.toLowerCase());

// Que 5.) Extract the amount out of this string. "Please give me RS 1000"
    
        let sen = "Please give me RS 1000";
        console.log(sen.slice(18));
        console.log(sen.slice(18,22));


// Que 6.) Try to change fourth character of a given string were you able to do it?

        let str = "Saket";
        str[4] = 't';
        console.log(str); // str cannot change, because string is immutable
//  que 1.> create a variable of type string and try to add number to it

let a = "SitaRam"
let b = 25;
console.log(a+b);
// que 2.> Use type of operator to find the datatype of the string in last question

console.log(typeof(a));

//que 3.> create a const object in javascript can you change it to hold a number later
// Ans-> No.


// God - refrence
// name, address, work - key
// vishnu, saket, Destroyer - value
const God ={     
    'name':"Vishnu",
    'address': "Saket",
    'work': "Destroyer"
}
// God = "Visnhu"; can't do

// que 4.> Try to add a new key to the const object in problem 3. Are you able to do it?

God['age']="unlimited";
God['assistant']
console.log(God);
console.log(typeof(God['assistant']));

// Que 5.> write a JS Program to create a word meaning dictionary of 5 words

const dictionary ={
    'Dull':"boring",
    'Educated': "Learned",
    'Enjoy': "appreciate",
    'Fail': 'Faulter',
    'Forward':'Ahead'
}
console.log(dictionary);
console.log(dictionary['Dull']);
console.log(dictionary['Educated']);
console.log(dictionary['Enjoy']);
console.log(dictionary['Fail']);
console.log(dictionary['Forward']);
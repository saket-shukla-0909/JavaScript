// Array Methods
let num = [1,2,3,34,4]


// toString() Method
console.log(typeof(num[1]));
let b = num.toString()// now numbers are converted into string
console.log(typeof(b))

// join() Method
let c = num.join("+");
console.log(c); 
console.log(typeof(c))

// pop() Method pop returns the popped element
let d = num.pop()
console.log(num, d)

// push() Method push returns the new array element
let e = num.push(5);
console.log(num, e);

// shift() Method
let f = num.shift() //Removes the element from the start of an array
console.log(f, num)

// unshift() Method
let g = num.unshift(78); // Add the element to the begining and returns new array length
console.log(g, num);

// delete() Method
let h = [11,23,65,43];
console.log(h)
console.log(h.length)
delete h[0];
console.log(h);
console.log(h.length)

// conact() Method
let num1 = [1,2,3,4,5];
let num1_more = [6,7,8,9,10];
let newArray = num1.concat(num1_more);
console.log(newArray);

// sort() Method
let num4 = [229,3,2,1,115,524];
console.log(num4.sort());

// sorting for ascending order
let ascending = (a,b)=>{
    return a-b
}
console.log(num4.sort(ascending));

// sorting for descending order
let descending = (a,b)=>{
    return b-a;
}
console.log(num4.sort(descending));
 
// reverse() Method - It reverse the array
console.log(num4);
let num5 = num4.reverse();
console.log(num5);

// splice() Method  
// It is used to add new elements in an array. It containe three parameter 
// eg - splice(a,b,c)
// a = position to add
// b = how many elements you have to remove
// c = elements which you have to add

let num6 = [1,2,3,4]
console.log(num6);
let num7 =  num6.splice(2,2,1011,1022,1033)
console.log(num6);
console.log(num7)

// slice() it slices out a piece of an array. It creates a new array

let num8 =  [5,8,4,3,6,9,2,1];
let num9 = num8.slice(3);
console.log(num9);
let num10 = num8.slice(2,5);
console.log(num10);
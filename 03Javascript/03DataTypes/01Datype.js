
//Cheak Javascriptchaiaurcode Repo(Symbole in this repo nice)

//There are 8 basic data types in JavaScript.

//Seven primitive data types:

// 1.number for numbers of any kind: integer or floating-point, integers are limited by ±   (2^53-1).
// 2.bigint for integer numbers of arbitrary length.
// 3.string for strings. A string may have zero or more characters, there’s no separate single-character type.
// 4.boolean for true/false.
// 5.null for unknown values – a standalone type that has a single value null.
// 6.undefined for unassigned values – a standalone type that has a single value undefined.
// 7.symbol for unique identifiers.

// And one non-primitive data type:
// 8.object for more complex data structures.

//++++++++++++++++Example++++++++++

// no error
let message = "hello";
message = 123456;
//console.log(message)




//+++++++++++++++Number++++++++

//The number type represents both integer and floating point numbers.

let n = 123;
n = 12.345;




//+++++++++BigInt+++++++++

//In JavaScript, the “number” type cannot safely represent integer values larger than (2^53-1) (that’s 9007199254740991), or less than -(2^53-1) for negatives.




//+++++++String+++++++++

//A string in JavaScript must be surrounded by quotes.

let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;




//++++++++Boolean (logical type)+++++

//The boolean type has only two values: true and false.

//This type is commonly used to store yes/no values: true means “yes, correct”, and false means “no, incorrect”.

let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked




 //++++++++null+++++

//1.The special null value does not belong to any of the types described above.

//2.It forms a separate type of its own which contains only the null value:

let age = null;

//3.In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.

//4.It’s just a special value which represents “nothing”, “empty” or “value unknown”.

//5.The code above states that age is unknown.




//++++++++undefined+++++++++++

//The special value undefined also stands apart. It makes a type of its own, just like null.

//The meaning of undefined is “value is not assigned”.

//If a variable is declared, but not assigned, then its value is undefined:

let a;

//alert(a); // shows "undefined"



//++++++++++Symbol++++++++++++++

const mysymbol=Symbol();
const nameSymbol=Symbol("monkey")

console.log(mysymbol)
console.log(nameSymbol)

console.log(typeof mysymbol)
console.log(typeof nameSymbol)
console.log(typeof "hello")

console.log(Symbol()===mysymbol)// Every Symbol has UNIQUE..
console.log(Symbol("mokey")===nameSymbol)
console.log(mysymbol.description)//undefine
console.log(nameSymbol.description);//monkey




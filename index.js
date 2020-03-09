/*----------Part 1.1----------*/
/*
Operator             Description
   +                  Addition
   -                 Subtraction
   *                 Multiplication
   /                  Division
   %                  Modulus
  **                 Exponentiation

*/
//setting variables
let x = 10;
let y = 5;

//printing  to console
console.log(x + y);  //sum of x and y
console.log(x - y);  //subtraction of x and y
console.log(x * y);  //multiplication of x and y
console.log(x / y);  //x divided by y
console.log(x % y);  //remainder of x and y
console.log(x ** y); //x to the power of y

//Addition Operation in three styles

//let x = 10;
//let y = 5; 
console.log(x + y);

//let x = 10;
//let y = 5;
let result = x + y;
console.log(result);

x = 10 + 5;
console.log(x);

/*----------Part 1.1----------*/
// increment Operator 

x = 10;

//pre increment (adding 1 before printing x)
console.log(x);
console.log(++x);   //increasing x by 1
console.log(x);
console.log(++x);   //increasing x by 1
console.log(x);
console.log(++x);   //increasing x by 1
console.log(x);

y = 10;

//post increment (adding 1 after printing x)
console.log(y);
console.log(y++);   //increasing x by 1 
console.log(y);
console.log(y++);   //increasing x by 1
console.log(y);
console.log(y++);   //increasing x by 1
console.log(y);

//Pre increment increments the variable and then prints it to log
//Post increment prints the variable and then increments it
//because the computer reads from left to right y=x++ would set y as the value of x and then add to x
//like this y = x then x++
//Addition example

x = 10;
y = x;

console.log("Pre - Increment");

y = ++x;
console.log(x);
console.log(y);

console.log("Post - Increment");

y = x++;
console.log(x);
console.log(y);

//subtraction example

x = 10;
y = x;

console.log("Pre - Dncrement");

y = --x;
console.log(x);
console.log(y);

console.log("Post - Dncrement");

y = x--;
console.log(x);
console.log(y);

//this for operatior will count to 10 and stop
//insdie the for scope we set a variable called i
//then we say "run until i is greater or equal to 10"
//and add 1 to the i variable 
for(let i=0; i <= 10; i++) {
    console.log(i);
};

//Incrementing and Decrementing inside an expression

console.log("Pre - Increment");
x = 1;
console.log(x);         //x is 1
console.log(10 * ++x);  //add 1 to x then print 10 * x 
console.log(x);

console.log("Post - Increment");
y = 1;
console.log(y);
console.log(10 * y++);  //print 10 * y and then add 1 to y
console.log(y);

//--------Unary, Binary Operators--------
//Unary Operator: An operator with one operand
x = 1;
x = -x;
console.log(x);

//Binary Operator: An operator with two operands
x = 10;
y = 15;
console.log(x + y);

//String Concatenation
//The + Operatior concatenates two strings
let a = "Hello, ";
let b = "World!";
console.log(a + b);

let c = "I am ";
let d = "a String";
let e = c + d;
console.log(e);

let f = "My name is " + "String101";
console.log(f);

const firstWord = "Hello";
const secondWord ="World";

console.log(firstWord + " " + secondWord);        //basic way to combine variables
console.log(`${firstWord}${secondWord}`);  //cool way to combine variables with $$
//the benifit of this is that it adds a space between the variables for you

//seeing what happens with numbers
const firstNumber = 10;
const secondNumber = 5;

console.log(firstNumber + " " + secondNumber);        //basic way to combine variables
console.log(`${firstNumber}${secondNumber}`);  //cool way to combine variables with $$
//ending in dissapointment 

//numbers as a string
console.log(10 + 5);
console.log(10 + '5');
console.log('10' + 5);
console.log(10 + 10 + '5');
console.log('10' + '10');

console.log(10 - 5);
console.log(10 - '5');
console.log('10' * 5);
console.log(10 + 10 - '5');
console.log('10' / '10');


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

/*----------Part 1.2----------*/
//Decrement Operator

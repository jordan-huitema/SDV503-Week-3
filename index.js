/*----------Part 1.1----------*/
/* 09/03/2020
//Operator             Description
//   +                  Addition
//   -                 Subtraction
//   *                 Multiplication
//   /                  Division
//   %                  Modulus
//  **                 Exponentiation

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

//----------Part 1.1----------
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
console.log("Numbers as a string");

console.log(10 + 5);        //adds 10 and 5 together to get 15
console.log(10 + '5');      //prints the number 10 followed by the number 5, they are not added together to get 15 because 5 is set as a string and not a number
console.log('10' + 5);      //prints 10 as a string and then prints 5 as a number
console.log(10 + 10 + '5'); //adds 10 and 10 because they are numbers and prints the number 5 as a string
console.log('10' + '10');   //prints 1010 because both numbers are set as a string

console.log(10 - 5);        //subtracts 5 from 10
console.log(10 - '5');      //subtracts 5 from 10, - can only be used on numbers so the string is treated as a number
console.log('10' * 5);      //multiples 10 by 5, * can only be used on numbers so the string is treated as a number
console.log(10 + 10 - '5'); //adds 10 and 10 then subtracts 5, - can only be used on numbers so the string is treated as a number
console.log('10' / '10');   //divideds 10 by 10, / can only be used on numbers so the string is treated as a number

//end of 09/03/2020
*/

//start 10/03/2020

console.log( +true );   // 1, true is converted to 1 using unary plus
console.log( +false );  // 0, false is converted to 0
console.log( +"" );     // 0, empty string converted to 0

console.log(10 + 5 * 3); // 25, First Multiplication then Addition

//Operator         Description              Example         Equals 
let x = 10;
let y = 5;
//   =               Assign                 x = y           x = y
x = y;      //sets/assigns the value of x to the value of y
console.log(x);
console.log(y);
//   +=           Add and Assign            x += y          x = x + y
x += y;     //adds the value of y to the value of x
console.log(x);
console.log(y);
//   -=        Subtract and Assign          x -= y          x = x - y
x -= y;     //subtracts the value of y from the value of x
console.log(x);
console.log(y);
//   *=         Multiply and Assign         x *= y          x = x * y
x *= y;     //multiplys the value of x by the value of y
console.log(x);
console.log(y);
//   /=         Divide and Assign           x /= y          x = x / y
x /= y;     //Divides the value of x by the value of y and sets x as the result 
console.log(x);
console.log(y);
//   %=      Divide and Assign modulus      x %= y          x = x % y
x = 65;
y=15;
x %= y;     //divide x by y and set x as the remainder, if y is larger than x the value will not change 
console.log(x);
console.log(y);

//Operator       Name        
let a = 10;
const b = 10;
//  ==           Equal
if ( a == b ) {
  console.log( "a and b are the same number" );
};
//  ===          Identical    // check equality of data type
if ( a === b ) {
  console.log( "a and b are the same number and same data types" );
};
//  !=           Not equal
if ( a != b ) {
  console.log( "a and b are diffrent numbers" );
};
//  !==          Not identical //check inequality of data type
if ( a != b ) {
  console.log( "a and b are diffrent numbers or diffrent data types" );
};
//  <           Less than
if ( a < b ) {
  console.log( "a is less than b" );
};
//  >           Greater than
if ( a > b ) {
  console.log( "a is greater than b" );
};
//  >=          Greater than or equal to
if ( a >= b ) {
  console.log( "a is greater or equal to b" );
};
//  <=          Less than or equal to
if ( a != b ) {
  console.log( "a is less or equal to b" );
};

console.log(10 == "5");   //equal to
console.log(10 == "10");

console.log(10 != "5");   //not equal to
console.log(10 != "10");

console.log(10 < "5");    //less than
console.log(10 < "10");

console.log(10 > "5");    //greater than
console.log(10 > "10");

console.log(10 <= "5");   //less than or equal to
console.log(10 <= "10");

console.log(10 >= "5");   //greater than or qual to
console.log(10 >= "10");

//is the first value the same data type as the second AND the same value
console.log(10 === "10");
console.log(10 === 5);
console.log(10 === 10);
console.log(10 === 5);

//is the first value the same data type as the second AND a diffrent value
console.log(10 !== "10");
console.log(10 !== "5");
console.log(10 !== 10);
console.log(10 !== 5);

//the true value is equal 1 
//the false value is equal to 0
console.log(true == 1);   //equal to
console.log(true == "1"); //this treats a string as a number
console.log(true == 0);
console.log(false == 1);  //equal to
console.log(false == 0);
console.log(false == "0");//this treats a string as a number

//the true value is equal 1 
//the false value is equal to 0
console.log(true != 1);   //not equal to
console.log(true != "1"); //this treats a string as a number
console.log(true != 0);
console.log(false != 1);  //not equal to
console.log(false != 0);
console.log(false != "0");//this treats a string as a number

console.log("A" == "A");  //this also works with text strings
console.log("a" == "A");  //and it is case sensitive

//Java asigns values to charaters and compares them (this is case sensitive)
console.log("A" > "a");
console.log("A" < "a");
console.log("A" > "B");
console.log("A" < "B");

//we can also check if the values are the same character case (data tpye) AND the same values (character)
console.log("A" === "a");
console.log("a" === "a");
console.log("A" === "B");
console.log("a" === "b");


console.log(1 == "1");    //the string is being treated as a number (1) which is equal to the number value (1)
console.log(1 === "1");   //the string is a diffrent data type to the number

console.log(1 == true);   //true is treated as a number (1) which is equal to the first value (1)
console.log(1 === true);  //true is a diffrent data type to the number

console.log(0 == false);  //false is treated as a number (0) which is equal to the first value (0)
console.log(0 === false); //false is a diffrent data type to the number

console.log(null == 0);   //null means no value and because 0 is a value 0
console.log(null === 0);  //null is no data and 0 is a data type so the result is false
console.log(null > 0);    //false because 0 isnt smaller than no value
console.log(null < 0);    //false because 0 no value is not smaller than a value of 0
console.log(null >= 0);   //>= treats null as a value of 0 because there is a lack of value, 0 is equal to 0 so the value is true

console.log(undefined == null); //both values are defining a lack of value so they are equal
console.log(undefined === null);//undefined is no value or data type and null is a data type with no value 

console.log(null + 1);          //null is a data type with no value so adding 1 makes it a value of 1
console.log(undefined > 0);     //undefinded is not a data type so cannont be greater than a value of 0
console.log(undefined + 1);     //undefinded is not a data type so adding 1 is still no data

//----------IF AND NOT------------

//OR ||
//if either value is true || (or) will print true
console.log(true || true);    //true because both values are true
console.log(true || false);   //one of the values are true so the result is true
console.log(false || true);   //""
console.log(false || false);   //none of the values are true so the result is false


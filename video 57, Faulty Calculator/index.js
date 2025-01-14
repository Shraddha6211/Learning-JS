/*Create a faulty calculator using Javascript

This faulty calculator does following:
1. It takes two numbers as input from the user.
2. It performs wrong operations as follows:

+  -----> -
* ------> +
-  -----> /
/  -----> **

It performs wrong operation 10% of the times
*/

//This code runs only on the webpage because it has parse float used in it. 
//cannot run in the terminal hence to make a faulty calendar first assign math random to a variable 'x' and if 'x' is lesser than 0.1 use faulty operators else use correct operators
const num1 = parseFloat(prompt("Enter a number:"));
const num2 = parseFloat(prompt("Enter another number:"));
const operator = prompt('Enter the operator (+, -, *, /):');

function faultyCalculator(num1, num2, operator) {
    // const faultChance = a < 0.1;
    a = Math.random();
    if (a<0.1) {
        //performs wrong operation
        switch (operator) {
            case '+':
                return num1 - num2;
            case '-':
                return num1 / num2;
            case '*':
                return num1 + num2;
            case '/':
                return num1 ** num2;

        }
    }
    else {
        switch (operator) {
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
        }
    }
}
const result= faultyCalculator(num1,num2,operator);
//Display Result
console.log(`The result of ${num1} ${operator} ${num2} is ${result}`);

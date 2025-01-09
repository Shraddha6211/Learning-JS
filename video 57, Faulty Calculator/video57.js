// Write a program to print the marks of a student in an object using for loop.
// obj={harry:98, rohan:70, aakash:7}
obj={harry:98, rohan:70, aakash:7}
for (let i = 0; i < 3; i++) {
    console.log(obj);
}
//Write the program in q1 using for in loop
for (const key in obj) {
   console.log(key)
}
for (const key in obj) {
    const element=obj[key];
    console.log(element);
 }
//Write a program to print "try again" until the user enter the correct number.
// let correctnumber=15
// let userinput;
// while(true){
//     userinput= parseInt(prompt("Enter a number: "),10);
//     if(userinput===correctnumber){
//         console.log("You entered the correct number");
//     }
//     else{
//         console.log("Try again");
//     }
// }

// Write a function to find mean of 5 number.

//for of loop is used to display the elements of an arary like the characters of a string.
//while loop is used when it is acceptable that the loop won't run even once
//do while loop is used when it is required that the loop runs at least once

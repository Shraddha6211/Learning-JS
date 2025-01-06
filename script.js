// //For a given array of numbers print the square of each value using the forEach loop
// let arr=[2,3,5,6,7];
// arr.forEach((val)=>{
//     console.log("The values in the array are",val);
// });
// arr.forEach(function printSquare(val){
//     console.log("Their squares will be :", val*val);
// });

// Practice Question
// We are given array of marks of students. Filter out the marks of students that scored 90+.
// let arr=[25,99,34,67,79,90,89,91];
// const marks=arr.filter((val)=>{
//     return val >=90;
// });
// console.log(marks);

//Take a number n as input from user.Create an array of numbers from 1 to n.
let n = prompt("Enter a number: ");
let arr = [];
for (let i = 1; i <= n; i++) {
  arr[i - 1] = i;
}
console.log(arr);
//Use the reduce method to calculate the sum of all numbers in the array.
let sum= arr.reduce((prev, curr)=>{
    return prev+curr;
});
console.log("Sum:",sum);
//Use the reduce method to calculate product of all numbers in the array.
let product= arr.reduce((prev, curr)=>{
    return prev*curr;
});
console.log("Product: " ,product);


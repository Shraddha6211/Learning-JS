// Factorial Calculator using For loop and Reduce array function
// Using For loop
let num= parseFloat(prompt("Enter a number:"));
let arr=[];
for(let i=1; i<=num; i++){
    arr[i-1]=i;
}
let Factorial=1;
for(let i=0; i<arr.length;i++){
    Factorial*=arr[i];
}
console.log(`The factorial of ${num} is ${Factorial}.`);
console.log(`The factorial of ${num} is ${Factorial}.`);
//Using Reduce array function
// let num= parseFloat(prompt("Enter a number:"));
// let arr=[];
// for(let i=1; i<=num; i++){
//     arr[i-1]=i;
// }
// let Factorial=arr.reduce((prev, curr)=>{
//     return prev*curr;
// })
// console.log(Factorial);


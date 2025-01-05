// let marks= [85, 97,44, 37, 76, 60];
// for( let i=0;i<marks.length;i++){
//     let sum=0;
//     sum=sum+marks[i];
//     total=marks.length;
// }
// console.log(total);

// let sum=0;
// for(let val of marks){
//     sum=sum+val;
// }
// console.log(sum);
// let avg= sum/marks.length;
// console.log(`Average Marks is: ${avg}`);

// //Practice Question -2
// let items=[250,645,300,900,50];
// for(let i=0;i<items.length;i++){
//     offer=items[i]/10;
//     items[i]=items[i]-offer;
// }
// console.log(`Discounted Prices are: ${items}`);

// //Array Methods
// let arr=[1,2,5,8,9,6,7,12];
// console.log(arr);
// let val1=arr.splice(2,3);
// console.log(val1);
// let val2=arr.splice(2,0,501,202,111);
// console.log(val2);

// Practice question
let company=["Blooomberg","Microsoft", "Uber","Google","IBM","Netflix"];
console.log(company);
let val=company.shift();
console.log("Deleted from the first line:",val);
console.log(company);
let val2=company.splice (1,1,"Ola");
console.log(company);
let val3=company.splice(5,0,"Amazon");
console.log(company);
company.push("Apple");


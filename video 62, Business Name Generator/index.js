/*Create a business name generator by combining list of adjectives, shop name and another word
Note: Donot use Arrays.

Adjectives:
Crazy
Amazing
Fire

Shop Name:
Engine
Foods
Garment

Another word:
Bros
Limited
Hub */

a=Math.random();
console.log(a);
const adj1="Crazy";
const adj2="Amazing";
const adj3="Fire";

const sname1="Engine";
const sname2="Food";
const sname3="Garment";

const word1="Bros";
const word2="Limited";
const word3="Hub";

const adj = a<0.33?adj1:a<0.67?adj2:adj3;
const sname= a<0.33?sname1:a<0.67?sname2:sname3;
const word= a<0.33?word1:a<0.67?word2:word3;

const businessName=`${adj} ${sname} ${word}`;
console.log(businessName);




//Create a variable of type string and try to add a number to it.
let str="Shraddha";
let number=8;
let result=str+number;
console.log(result);

//Use typeof operator to find the datatype of the string in the previous question
console.log(typeof str);
console.log(typeof number);
console.log(typeof result);

//Create a const object in Javascript. Can you change it to hold a number later?
const object={name: "Shraddhu", age: 15};
console.log(object);
object.name="Maya";
object.age=19;
console.log(object);

console.log("Not changeable hold a number later being a Constant");

//Try to add a new key to the const object in Problem 3.Were you able to do it?
object.gender="F";
object.address="Kathmandu";
console.log(object);
console.log("As seen we can add more keys to the const object.")

//Write a JS program to create a word meaning dictionary of 5 words.
    //Create an object to store the word meanings
    const wDictionary ={
            //Add new words to the dictionary
            hello: "a greeting",
            delighted: "Very happy",
            mesmerize: "Shocking",
            Agony: "Pain",
            Muster: "Gather"
    };
console.log("Word Meaning Dictionary");
for(const word in wDictionary){
    console.log(`${word} : ${wDictionary[word]}`);
}
console.log(wDictionary);


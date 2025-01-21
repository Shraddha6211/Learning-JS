// <!-- Given 5 boxes, assign a random color and random background to each box using DOM concepts -->
console.log("Script.js initializing");
console.log("cute");
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children;

function getRandomColor(){
    val1= Math.ceil(Math.random()*255);
    val2= Math.ceil(Math.random()*255);
    val3= Math.ceil(Math.random()*255);
    return `rgb(${val1},${val2},${val3})`;
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color= getRandomColor()
});
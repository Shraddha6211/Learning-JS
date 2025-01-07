// let h2= document.querySelector("h2");
// console.dir(h2);

// h2.innerText= h2.innerText + "  From Apna College Students";
let divs= document.querySelectorAll(".box");
divs[0].innerText="new unique value 1";
divs[1].innerText="new unique value 2";
divs[2].innerText="new unique value 3";

let idx=1;
for(div of divs)
{
    div.innerText=`The new unique value is ${idx}`;
    idx++;
}
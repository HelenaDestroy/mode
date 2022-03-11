const elemento1 = document.getElementById("elemento1");
const elemento2 = document.getElementById("elemento2");
const elemento3 = document.getElementById("elemento3");
const elemento4 = document.getElementById("elemento4");
const elemento5 = document.getElementById("elemento5");
const elemento6 = document.getElementById("elemento6");
const elemento7 = document.getElementById("elemento7");
const elemento8 = document.getElementById("elemento8");
const elemento9 = document.getElementById("elemento9");
const elemento10 = document.getElementById("elemento10");
const b = document.getElementById("button");

b.addEventListener("click", calculateMode);

function calculateMode() {
const array = [];  //este es el array
array.push(parseInt(elemento1.value));
array.push(parseInt(elemento2.value));
array.push(parseInt(elemento3.value));
array.push(parseInt(elemento4.value));
array.push(parseInt(elemento5.value));
array.push(parseInt(elemento6.value));
array.push(parseInt(elemento7.value));
array.push(parseInt(elemento8.value));
array.push(parseInt(elemento9.value));
array.push(parseInt(elemento10.value));

const arrayToObjectCount = {};  //este es el objeto
 
array.map(function (elemento)           {
      if (arrayToObjectCount[elemento]) 
      {
        arrayToObjectCount[elemento] += 1;
      } else 
      {
        arrayToObjectCount[elemento] = 1;
      }                               } );
    const objectToArray = Object.entries(arrayToObjectCount).sort( //pasa objeto a un array de
    function (elementoA, elementoB) {
      return elementoA[1] - elementoB[1];
    }
  );
const mode = objectToArray[objectToArray.length - 1];
document.getElementById("result").innerHTML = "the mode is " + mode + "<br/>";
}


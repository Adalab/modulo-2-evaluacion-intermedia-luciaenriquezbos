'use strict';

const valueInput = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const track = document.querySelector(".js-track");


//Generar número aleatorio:::::::::::::

const numberResult = getRandomNumber(100);


//Mostrar número en consola::::::

console.log("MI número aleatorio es "+ numberResult);

//Contenido input

function handleClickButton() {

    const numberInput = valueInput.value ;

    console.log(numberInput);

    //compara el numero

    if (numberInput == numberResult){
        track.innerHTML =`Has ganado Campeona!!!`;
     }
     else if (numberInput > 100){
        track.innerHTML =`El número debe estar entre 1 y 100`;
     }
     else if (numberInput < 1){
        track.innerHTML =`El número debe estar entre 1 y 100`;
     }
     else if (numberInput < numberResult){
        track.innerHTML =`Demasiado bajo`;
     }
     else if (numberInput > numberResult){
        track.innerHTML =`Demasiado alto`;
     }
     
    
}

button.addEventListener( 'click' , handleClickButton );




//Mostrar consola contenido input

//console.log(numberInput);













function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
   }



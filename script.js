//Aca el juego selecciona un numero al azar
let numeroAzar=Math.floor(Math.random()*100) + 1

//numero que puso el jugador
let numeroEntrada=document.getElementById("numeroEntrada")

let mensaje=document.getElementById("mensaje")

//esta accion se va a ejecutar cuando se toque el boton chequear
function chequearResultado(){
    let numeroIngresado=parseInt(numeroEntrada.value)
    if(numeroIngresado <1 || numeroIngresado >  100 || isNaN(numeroIngresado)){
        mensaje.textContent="Por favor introduce un numero valido entre 1-100"
        return
    }
    if(numeroIngresado===numeroAzar){
        mensaje.textContent="!Felicidad encontraste el numero";
        mensaje.style.color='green';
        numeroEntrada.disabled=true;
    }else if(numeroIngresado<numeroAzar){
        mensaje.textContent="!Lo siento el numero secreto es mayor";
        mensaje.style.color='red';
    }
    else{
        mensaje.textContent="!Lo siento el numero secreto es menor";
        mensaje.style.color='red';
    }
}
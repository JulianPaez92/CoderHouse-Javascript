console.log('Desde ciclos')

// FOR

for(let i = 0; i < 10; i++) {
    console.log(i);
}

/* for(desde, hasta, actualizacion){

}*/ 

//

let frutas = ['manzana','banana','naranja']

for(let i=0; i<=2; i++){
    console.log(frutas[i])
}
// length
console.log(frutas.length)

for(let i=0; i < frutas.length; i++){
    console.log(frutas[i])
}

//BREAK Corta el bucle

for(let i=1; i<=10; i++){
    if( i===5 ) {
        break
    }
    alert(i)
}

//WHILE

let entrada = prompt("Ingresar un dato");

while (entrada != "ESC") {
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar otro dato");
}

/////

let frutas = ['manzana','banana','naranja']

let posicion = 0

let cantElementos = frutas.length

while( posicion < cantElementos) {
    console.log(frutas[posicion]);
    posicion++
}

////
let nombreUsuario = prompt('Ingrese su nombre')

while( nombreUsuario !== 'Julian') {
    alert('Usuario inválido');
    nombreUsuario = prompt('Ingrese su nombre')
}

console.log('Bienvenido Julian');

//DO WHILE Sirve para ejecutar 1 vez el while por mas que sea false

do {
    console.log('Imprimi esto 1 vez');
}

while(false){
    console.log('No se ve');
}


//SWITCH

let signo = prompt('De que signo sos?')

switch(signo) {
    case 'tauro':
        console.log('leo horoscopo tauro');
        break
    case 'cancer':
        console.log('leo horoscopo cancer');
        break
    default:
        console.log('Eso no es un signo');
        break
}


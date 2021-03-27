console.log('Desde funciones');

function saludar() {
    console.log("Wenasss");
}

saludar()


//FUNCTION

function obtenerSigno() {
    return prompt('De que signo sos?').toLowerCase()
}

function leerHoroscopoPorSigno(signo) {

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
}

const signo = obtenerSigno()
leerHoroscopoPorSigno(signo)

//SCOPE 

//VARIABLES GLOBALES y LOCALES

let variableGlobal = 'variableGlobal' //se ejecuta en tódo el programa

function fn() {
    console.log(variableGlobal);
    let variableLocal = 'variableLocal'
    console.log(variableLocal); //acá sólo se ejecuta esta variable
}

fn()

//FUNCION ANÓNIMA (Llamado de funcion mediante variable)
//OPCION 1
const fn = function() {
    console.log('relak');
} 

fn()
//OPCION 2
(function () {
    console.log('Hola champion');
})()

//OPCION 3 FUNCIÓN FLECHA

const fn = function(nombre) {
    console.log('Hola ' + nombre);
}

const arrowFn = (nombre) => {
    console.log('Hola ' + nombre);
}

fn('Emanuel')
arrowFn('Rafael')

///////ejemplo anonima
const suma = function(num1,num2) {
    return num1 + num2
}

let resultado = suma(2,7)
console.log(resultado);

/////ejemplo flecha
const arrowSuma = (num1,num2) => num1 + num2

let resultado = suma(2,7)
console.log(resultado);


let  nombre  =  prompt ( "Ingresá tu nombre" )
let  apellido  =  prompt ( "Ingresá tu apellido" )
let  añoDeNacimiento  =  prompt ( "Ingresá tu año de nacimiento" )
let edad = (2021 - añoDeNacimiento)

let  salida  =  "Tu nombre y apellido son:"  +  nombre  +  " "  +  apellido  +  ". Y tenés "  +  ( 2021  -  añoDeNacimiento )  +  "años. " ;

if (edad <= 18) {
    alert ( salida + " Sos menor de edad" ) ;    
}
else if (edad > 18 && edad <=50) {
    alert ( salida + " Sos adulto")
}
else {
    alert( salida + " Sos un abuelo" )
}

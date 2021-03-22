    
    const mensaje = 'Desde el index.js'

    // console.log('comentario en linea')

    /*
        console.log('comentario en parrafo')
    */
/*
    console.log(mensaje)

    let gatito = 'Ruben' // let crea una variable mutable

    const juan = 'Robert' // const crea una constante

    let gato1 = 'Juan'

    let gato2 = gato1

    console.log(gato1)
    console.log(gato2)

    let gatitoObj1 = {
        "nombre" : "Ruben"
    }

    gatitoObj2 = gatitoObj1

    gatitoObj2.nombre = 'Vasco'

    console.log(gatitoObj1)
    console.log(gatitoObj2)

    let variable;  // cuando no igualamos va a figurar undefined

    console.log(varible.nombre)
*/

    let variableString = 'mivariable'

    let variableNumber = 10

    let variableBoolean = false

    let variableUndefined = undefined

    let variableNull = null

    let variablebigInt = BigInt(10)

    let variableSymbol = Symbol('symbol')

    // Objetos

    let fn = function () {
        console.log('holis')
    }

    let obj = {}

    // variable = 1

    console.log(variableString)



    //En consola

    window.prompt //para que tire un dialogo en la pagina

    // prompt viene con un impute

    let nombre = prompt('Ingrese su nombre')

    let edad = prompt('Ingrese su edad')

    edad = parseInt(edad)

    console.log(nombre)

    // alert solo informa

    alert('Bienvenido ' + nombre)

    // typeof dice de que tipo de dato se trata

    console.log(typeof edad)

    // date and year

    let date = new Date()

    let year = date.getFullYear()

    let dateUser = year - edad

    //console.log(year)

    alert('Bienvenido ' + nombre + '. Usted nacio en ' + dateUser)


    // CLASE 2

    //CONTROL DE FLUJOS

    if (true){
        console.log("var a ver este mensaje")
    }

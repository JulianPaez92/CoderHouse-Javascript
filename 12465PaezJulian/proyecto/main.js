document.getElementById("botonCompra1").addEventListener("click", function() {
    let cant = prompt('Ingrese cantidad de espectadores(Máximo 5):')
    parseInt(cant)
    while(cant > 5) {
        cant = prompt('Ingrese como maximo 5 espectadores')
        parseInt(cant)
    }
    
    function test(){
      if (cant == 1) {
        alert("Adquiriste " + cant + " entrada")
      }
      else if (cant > 1) {
        alert("Adquiriste " + cant + " entradas")
      }
      else {
        alert("No adquiriste entradas")
      }
    }
    test()
  })
  
  document.getElementById("botonCompra2").addEventListener("click", function() {
    let cant = prompt('Ingrese cantidad de espectadores(Máximo 2):')
    parseInt(cant)
    while(cant > 2) {
        cant = prompt('Ingrese como maximo 2 espectadores')
        parseInt(cant)
    }

    function test(){
      if (cant == 1) {
        alert("Adquiriste " + cant + " entrada")
      }
      else if (cant > 1) {
        alert("Adquiriste " + cant + " entradas")
      }
      else {
        alert("No adquiriste entradas")
      }
    }
    test()
  })
  

  document.getElementById("botonCompra3").addEventListener("click", function() {
    let cant = prompt('Ingrese cantidad de espectadores(Máximo 1):')
    parseInt(cant)
    while(cant > 1) {
        cant = prompt('Ingrese como maximo 1 espectadores')
        parseInt(cant)
    }
    
    function test(){
      if (cant == 1) {
        alert("Adquiriste " + cant + " entrada")
      }
      else {
        alert("No adquiriste entradas")
      }
    }
    test()
  })

  document.getElementById("botonCompra4").addEventListener("click", function() {
    let cant = prompt('Ingrese cantidad de espectadores(Máximo 10):')
    parseInt(cant)
    while(cant > 10) {
        cant = prompt('Ingrese como maximo 10 espectadores')
        parseInt(cant)
    }
    
    function test(){
      if (cant == 1) {
        alert("Adquiriste " + cant + " entrada")
      }
      else if (cant > 1) {
        alert("Adquiriste " + cant + " entradas")
      }
      else {
        alert("No adquiriste entradas")
      }
    }
    test()
  })

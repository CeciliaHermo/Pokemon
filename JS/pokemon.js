 let ataqueJugador
 
 function iniciarJuego(){
    let botonMascotaJugador = docment.getElementById("boton-mascota")
    botonMascotaJugador.addEvenListener("click", seleccionarMascotaJugador)
    
    let botonFuego = docment.getElementById("boton-fuego")
    botonFuego.addEvenListener("click", ataqueFuego)

    let botonAgua = docment.getElementById("boton-agua")
    botonAgua.addEvenListener("click", ataqueAgua)

    let botonTierra = docment.getElementById("boton-tierra")
    botonTierra.addEvenListener("click", ataqueTierra)

    let botonReiniciar = docment.getElementById("boton-reiniciar")
    botonReiniciar.addEvenListener("click", botonReiniciar)
  }

  function seleccionarMascotaJugador(){
    let seleccionarMascota =docment.getElementById("seleccionar-mascota")
    seleccionarMascota.style.display = "none" 

    let seccionSeleccionAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionAtaque.style.display = "flex"

    let inputCharmander = document.getElementById("charmander")

    let inputBulbasar = document.getElementById("bulbasaur")

    let inputSquirtle = document.getElementById("squirtle")

    if(inputCharmander.checked){
      spanMascotaEnemigo.innerhtml = "charmander"
    } else 

    if(inputBulbasaur.checked){
      spanMascotaEnemigo.innerhtml = "bulbasar"
    } else
    
    if(inputSquirtle.checked){
      spanMascotaEnemigo.innerhtml = "squirtle"
    } else{
      alert("Seleccionar una mascota")
    }
  }

  function ataqueFuego(){
    ataqueJugador = "fuego"
  }

  function ataqueAgua(){
    ataqueJugador = "agua"
  }

  function ataqueTierra(){
    ataqueJugador = "tierra"
  }

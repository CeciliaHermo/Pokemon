 let ataqueJugador
 let ataqueEnemigo

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
    let seccionSeleccionarMascota =docment.getElementById("seleccionar-mascota")
    seleccionarMascota.style.display = "none" 

    let seccionSeleccionAtaque = document.getElementById("seleccionar-ataque")
    seccionSeleccionAtaque.style.display = "flex"

    let inputCharmander = document.getElementById("charmander")

    let inputBulbasaur = document.getElementById("bulbasaur")

    let inputSquirtle = document.getElementById("squirtle")

    let spanMascota = document.getElementById("mascota-jugador")

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
    
    seleccionarMascotaEnemigo()
  }

  function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3) 
    let spanMascotaEnemigo = docment.getElementById ="mascota-enemigo"

    if(ataqueAleatorio==1){
      spanMascotaEnemigo.innerhtml = "charmander"
    } else

    if(ataqueAleatorio==2){
      spanMascotaEnemigo.innerhtml = "bulbasaur"
    } else

    if(ataqueAleatorio==3){
      spanMascotaEnemigo.innerhtml = "squirtle"
    } 
    
  }

  function ataqueFuego(){
    ataqueJugador = "fuego"
    ataqueAleatorioEnemigo()
  }

  function ataqueAgua(){
    ataqueJugador = "agua"
    ataqueAleatorioEnemigo()
  }

  function ataqueTierra(){
    ataqueJugador = "tierra"
    ataqueAleatorioEnemigo()
  }

  function ataqueAleatorioEnemigo(){
   let ataqueAleatorio = aleatorio(1,3)

   if (ataqueAleatorio == 1){
    ataqueEnemigo = "fuego"
   }else

   if (ataqueAleatorio == 2){
    ataqueEnemigo = "agua"
   }else

   if (ataqueAleatorio == 3){
    ataqueEnemigo = "tierra"
   }

  
  }

  function aleatorio(min,max){
    return math.floor(math.random()*(max-min+1)+min)
  }

  window.addEventListener("load", iniciarJuego)

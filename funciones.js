const seccionataque = document.getElementById ("seccion-ataque")
const seccionreiniciar = document.getElementById ("reiniciar")
const botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota")
const botonataquefuego = document.getElementById("boton-fuego")
const botonataqueagua = document.getElementById("boton-agua")
const botonataquetierra = document.getElementById("boton-tierra")
const botonataqueaire = document.getElementById("boton-aire")
const botonreiniciar = document.getElementById ("boton-reinciar")
const inputfuria = document.getElementById ("furia")
const inputaqua = document.getElementById ("aqua")
const inputterror = document.getElementById ("terror")
const inputair = document.getElementById ("air")
const inputferoz = document.getElementById ("feroz")
const inputtilone = document.getElementById ("tilone")
const inputayu = document.getElementById ("ayu")
const inputarmonia = document.getElementById ("armonia")
const spanmascotajugador = document.getElementById ("span-mascota-jugador")
const seccionelegir = document.getElementById ("seleccionar-mokemon")
const spanmascotaenemigo = document.getElementById ("span-mascota-enemigo")
const spanvidasjugador = document.getElementById ("span-vidas-jugador")
const spanvidasenemigo = document.getElementById ("span-vidas-enemigo")
const mresultado = document.getElementById ("resultado")
const mataquejugador = document.getElementById ("ataquesjugador")
const mataquesenemigo = document.getElementById ("ataquesenemigo")
const setionmensajes = document.getElementById ("resultado")  

let ataquejugador 
let ataqueenemigo
let nombremascotaenemigo 
let nombremascotajugador
let resultado
let vidasjugador = 3
let vidasenemigo = 3

function iniciarJuego() {
        seccionataque.style.display = "none"       
        seccionreiniciar.style.display = "none"        
        botonSeleccionarMascota.addEventListener("click" , seleccionarMascotaJugador)      
        botonataquefuego.addEventListener("click", ataquefuego)
        botonataqueagua.addEventListener("click", ataqueagua)
        botonataquetierra.addEventListener ("click", ataquetierra)
        botonataqueaire.addEventListener ("click", ataqueaire)   
        botonreiniciar.addEventListener ("click" , reiniciar)    
}
function seleccionarMascotaJugador () {
        seccionelegir.style.display = "none"
        seccionataque.style.display = "flex"
        const image =document.createElement ('img')

    if (inputfuria.checked){   
        spanmascotajugador.innerHTML = "Furia"
        nombremascotajugador = "FURIA"
        image.src = "./imagenes/furia.png"
        document.querySelector("div [id =imagenjugador] ").appendChild(image)      
    }   else if (inputaqua.checked){
            spanmascotajugador.innerHTML = "Aqua"
            nombremascotajugador = "AQUA"
            image.src = "./imagenes/aqua.png"
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
    }   else if (inputterror.checked){
            spanmascotajugador.innerHTML = "Terror" 
            nombremascotajugador = "TERROR" 
            image.src = "./imagenes/terror.png"
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
    }   else if (inputair.checked){
            spanmascotajugador.innerHTML = "Air"   
            nombremascotajugador = "AIR"
            image.src = "./imagenes/air.png"
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
    }   else if (inputferoz.checked){
            spanmascotajugador.innerHTML = "Feroz" 
            nombremascotajugador = "FEROZ"
            image.src = "./imagenes/feroz.png"
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
    }   else if  (inputtilone.checked){
            spanmascotajugador.innerHTML = "Tilone"  
            nombremascotajugador = "TILONE"
            image.src = "./imagenes/tilone.png"
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
    }   else if (inputayu.checked){
            spanmascotajugador.innerHTML = "Ayu"  
            nombremascotajugador = "AYU" 
            image.src = "./imagenes/ayu.png"
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
    }   else if (inputarmonia.checked){
            spanmascotajugador.innerHTML = "Armonia" 
            nombremascotajugador = "ARMONIA" 
            image.src = "./imagenes/armonia.png"
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
    }   else {
            alert("No Seleccionaste")
            reiniciar()
        } 
        mascotaenemigo()  
}
function mascotaenemigo () {
    let enemigo = Math.floor(Math.random() * (8 - 1 + 1) + 1) 
    const image =document.createElement ('img')
    if ( enemigo == 1) { spanmascotaenemigo.innerHTML = "Furia"
                mascotaenemigo = "FURIA"
                image.src = "./imagenes/furia.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)
        } else if(enemigo == 2) { spanmascotaenemigo.innerHTML = "Aqua"
                mascotaenemigo = "aqua"
                image.src = "./imagenes/aqua.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)
        } else if(enemigo == 3) { spanmascotaenemigo.innerHTML = "Terror"
                mascotaenemigo = "TERROR"
                image.src = "./imagenes/terror.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)
        } else if(enemigo == 4) { spanmascotaenemigo.innerHTML = "Air"
                mascotaenemigo = "AIR"
                image.src = "./imagenes/air.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)
        } else if(enemigo == 5) { spanmascotaenemigo.innerHTML = "Feroz"
                mascotaenemigo = "FEROZ"
                image.src = "./imagenes/feroz.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)
        } else if(enemigo == 6) { spanmascotaenemigo.innerHTML = "Tilone"
                mascotaenemigo = "TILONE"
                image.src = "./imagenes/tilone.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)
        } else if(enemigo == 7) { spanmascotaenemigo.innerHTML = "Ayu"
                mascotaenemigo = "AYU"
                image.src = "./imagenes/ayu.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)       
        } else if(enemigo == 8) { spanmascotaenemigo.innerHTML = "Armonia"
                mascotaenemigo = "ARMONIA"
                image.src = "./imagenes/armonia.png"
                document.querySelector("div [id =imagenenemigo] ").appendChild(image)
        } else { alert("error")
        }
}   
function ataquefuego (){
        ataquejugador = 'FUEGO'
        ataquealeatorioenemigo()    
}
function ataqueagua(){
        ataquejugador = 'AGUA'
        ataquealeatorioenemigo() 
}
function ataquetierra(){
        ataquejugador = 'TIERRA'
        ataquealeatorioenemigo() 
} 
function ataqueaire () {
        ataquejugador = 'AIRE'
        ataquealeatorioenemigo() 
} 
function ataquealeatorioenemigo () {
        let ataquealeatorio = Math.floor(Math.random() * (4 - 1 + 1) + 1)
       
        if (ataquealeatorio == 1) {
                ataqueenemigo = "FUEGO"
        }
        else if (ataquealeatorio == 2) {
                ataqueenemigo = "AGUA"
        }
        else if (ataquealeatorio == 3) {
                ataqueenemigo = "TIERRA" 
        }    
        else if (ataquealeatorio == 4) {
                ataqueenemigo = "AIRE"
        }
        else {alert("hay un error")
        }
        juego()
}
function juego () {
        if (ataquejugador == ataqueenemigo){
                resultado = "EMPATE 🤦‍♀️"
        } else if (ataquejugador == 'AGUA' && ataqueenemigo == "FUEGO"){
                resultado = "GANASTE ❗"
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo
        } else if (ataquejugador == 'AIRE' && ataqueenemigo == "FUEGO"){
                resultado = "GANASTE ❗" 
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo
        } else if (ataquejugador == 'FUEGO' && ataqueenemigo == "TIERRA"){
                resultado = "GANASTE ❗"
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo
        } else if (ataquejugador == 'TIERRA' && ataqueenemigo == "AGUA"){
                resultado = "GANASTE ❗" 
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo
        } else if (ataquejugador == 'AGUA' && ataqueenemigo == "AIRE"){
                resultado = "GANASTE ❗"
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo
        } else if (ataquejugador == 'TIERRA' && ataqueenemigo == "AIRE"){
                resultado = "GANASTE ❗"       
                vidasenemigo --
                spanvidasenemigo.innerHTML = vidasenemigo}
        else {
                resultado = "PERDISTE 💔"
                vidasjugador --
                spanvidasjugador.innerHTML = vidasjugador  
        }
       mensajes () 
       }
 function conteovidas (){
        if (vidasenemigo == 0) {
                mensajefinal ("GANADOR")
        } else if (vidasjugador == 0){
                mensajefinal ( "GAME OVER")
        } else {
        }
}
function mensajes (){        
        let nuevoataqueenemigo = document.createElement ("p")
        let nuevoataquejugador = document.createElement ("p")

        mresultado.innerHTML = resultado
        nuevoataquejugador.innerHTML= ataquejugador
        nuevoataqueenemigo.innerHTML= ataqueenemigo

        mataquejugador.appendChild(nuevoataquejugador)
        conteovidas ()
        mataquesenemigo.appendChild(nuevoataqueenemigo)
        conteovidas () 
}
function mensajefinal (resultadofinal) {
        seccionreiniciar.style.display = "block"                
        setionmensajes.innerHTML = resultadofinal      
        botonataquefuego.disabled =true
        botonataqueagua.disabled = true
        botonataquetierra.disabled = true
        botonataqueaire.disabled = true       
}
function reiniciar () {
        seccionataque.style.display = "none"
        seccionreiniciar.style.display = "none"
        location.reload ()
}
window.addEventListener("load" , iniciarJuego)
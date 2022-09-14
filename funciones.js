const seccionataque = document.getElementById ("seccion-ataque")
const seccionreiniciar = document.getElementById ("reiniciar")
const botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota")
const botonreiniciar = document.getElementById ("boton-reinciar")
const spanmascotajugador = document.getElementById ("span-mascota-jugador")
const seccionelegir = document.getElementById ("seleccionar-mokemon")
const spanmascotaenemigo = document.getElementById ("span-mascota-enemigo")
const spanvidasjugador = document.getElementById ("span-vidas-jugador")
const spanvidasenemigo = document.getElementById ("span-vidas-enemigo")
const mresultado = document.getElementById ("resultado")
const mataquejugador = document.getElementById ("ataquesjugador")
const mataquesenemigo = document.getElementById ("ataquesenemigo")
const setionmensajes = document.getElementById ("resultado")  
const contenedorpersonajes = document.getElementById ("contenedortarjetas")
const contenedorataques = document.getElementById ("contenedorataques")
const seccionmapa = document.getElementById ("mapa")
const mapa = document.getElementById ("canvamapa")

let jugadorId = null
let botonataqueagua 
let botonataquetierra 
let botonataqueaire 
let botonataquefuego 
let botones = []
let mokepones = []
let inputfuria
let inputaqua 
let inputterror 
let inputair 
let inputferoz 
let inputtilone 
let inputayu 
let inputarmonia
let ataquejugador = []
let ataqueenemigo = []
let nombremascotaenemigo 
let nombremascotajugador
let jugadorobjeto
let resultado
let ganadasjugador = 0
let ganadasenemigo = 0
let opciondemokemones
let opcionataques
let ataquesmokepon
let ataquemokeponenemigo
let simboloataque
let resultadofinal
let lienzo = mapa.getContext("2d")
let intervalo 
let imagenmapa = new Image()
imagenmapa.src = "./imagenes/mokemap.png"

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 500

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 500 / 500

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Mokepon { 
        constructor (nombre, foto, vida, x=10, y=20) {
                this.nombre= nombre
                this.foto = foto
                this.vida= vida
                this.ataques= []
                this.x= x * mapa.width / 500
                this.y= y * mapa.height / 500
                this.ancho= 40
                this.alto= 40
                this.mapafoto= new Image ()
                this.mapafoto.src= foto
                this.velocidadx= 0
                this.velocidady = 0
        }

        
        pintarmokepon() {
                lienzo.drawImage(
                        this.mapafoto, 
                        this.x, 
                        this.y, 
                        this.ancho,
                        this.alto
                        )
        }
}

let furia = new Mokepon ("Furia", "./imagenes/furia.png", 5)
let aqua = new Mokepon ("Aqua", "./imagenes/aqua.png" , 5)
let terror = new Mokepon ("Terror", "./imagenes/terror.png" , 5)
let air = new Mokepon ("Air", "./imagenes/air.png" , 5)
let feroz = new Mokepon ("Feroz", "./imagenes/feroz.png" , 5)
let tilone = new Mokepon ("Tilone", "./imagenes/tilone.png" , 5)
let ayu = new Mokepon ("Ayu", "./imagenes/ayu.png" , 5)
let armonia = new Mokepon ("Armonia","./imagenes/armonia.png" , 5)

let furiaenemigo = new Mokepon ("Furia", "./imagenes/furia.png", 5, 250, 170)
let aquaenemigo = new Mokepon ("Aqua", "./imagenes/aqua.png" , 5, 250, 400)
let terrorenemigo = new Mokepon ("Terror", "./imagenes/terror.png" , 5, 410, 420)
let airenemigo = new Mokepon ("Air", "./imagenes/air.png" , 5, 10, 220)
let ferozenemigo = new Mokepon ("Feroz", "./imagenes/feroz.png" , 5, 400, 220)
let tiloneenemigo = new Mokepon ("Tilone", "./imagenes/tilone.png" , 5, 160, 10)
let ayuenemigo = new Mokepon ("Ayu", "./imagenes/ayu.png" , 5, 440, 20)
let armoniaenemigo = new Mokepon ("Armonia","./imagenes/armonia.png" , 5, 90, 390)

furia.ataques.push (
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
furiaenemigo.ataques.push (
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
aqua.ataques.push (
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
aquaenemigo.ataques.push (
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
terror.ataques.push (
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
)
terrorenemigo.ataques.push (
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
)
air.ataques.push (
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🗻", id: "boton-tierra"},
)
airenemigo.ataques.push (
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🗻", id: "boton-tierra"},
)
feroz.ataques.push (
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
ferozenemigo.ataques.push (
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
tilone.ataques.push (
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
)
tiloneenemigo.ataques.push (
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🗻", id: "boton-tierra"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
)
ayu.ataques.push (
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
ayuenemigo.ataques.push (
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🗻", id: "boton-tierra"},
)
armonia.ataques.push (
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🗻", id: "boton-tierra"},
)
armoniaenemigo.ataques.push (
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "🌀", id: "boton-aire"},
        {nombre: "💧", id: "boton-agua"},
        {nombre: "🔥", id: "boton-fuego"},
        {nombre: "🗻", id: "boton-tierra"},
)
mokepones.push (furia, aqua, terror, air, feroz, tilone, ayu, armonia)

function iniciarJuego() {
        seccionataque.style.display = "none"       
        seccionreiniciar.style.display = "none"  
        seccionmapa.style.display = "none"
       mokepones.forEach ( (mokepon) => {
            opciondemokemones = ` <label class="tarjetanombre" for= ${mokepon.nombre} id="mokemones"> ${mokepon.nombre} 
            <input class=radios type= radio id= ${mokepon.nombre} name= mascotas/> 
            <div id="imagenfuria">            
            <img src=${mokepon.foto} alt=" ${mokepon.nombre}id="imagenfuria"></div> </label>` 
            contenedorpersonajes.innerHTML += opciondemokemones
                inputfuria = document.getElementById ("Furia")
                inputaqua = document.getElementById ("Aqua")
                inputterror = document.getElementById ("Terror")
                inputair = document.getElementById ("Air")
                inputferoz = document.getElementById ("Feroz")
                inputtilone = document.getElementById ("Tilone")
                inputayu = document.getElementById ("Ayu")
                inputarmonia = document.getElementById ("Armonia")

       })         
        botonSeleccionarMascota.addEventListener("click" , seleccionarMascotaJugador)       
        botonreiniciar.addEventListener ("click" , reiniciar)   
        unirse() 
}

function unirse (){
        fetch("http://localhost:8080/unirse")
        .then(function (res) {
                if (res.ok) {
                        res.text () 
                        .then(function (respuesta){
                                console.log (respuesta)
                                jugadorId = respuesta
                        })               }
        })
}



function seleccionarMascotaJugador () {
        seccionelegir.style.display = "none"
        let image =document.createElement ('img')
       
    if (inputfuria.checked){   
        spanmascotajugador.innerHTML = inputfuria.id
        image.src = furia.foto
        document.querySelector("div [id =imagenjugador] ").appendChild(image)   
        nombremascotajugador= inputfuria.id   
    }   else if (inputaqua.checked){
            spanmascotajugador.innerHTML = inputaqua.id
            image.src = aqua.foto
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
            nombremascotajugador= inputaqua.id 
    }   else if (inputterror.checked){
            spanmascotajugador.innerHTML = inputterror.id 
            image.src = terror.foto
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
            nombremascotajugador= inputterror.id 
    }   else if (inputair.checked){
            spanmascotajugador.innerHTML = inputair.id   
            image.src = air.foto
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
            nombremascotajugador= inputair.id 
    }   else if (inputferoz.checked){
            spanmascotajugador.innerHTML = inputferoz.id 
            image.src = feroz.foto
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
            nombremascotajugador= inputferoz.id 
    }   else if  (inputtilone.checked){
            spanmascotajugador.innerHTML = inputtilone.id
            image.src = tilone.foto
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
            nombremascotajugador= inputtilone.id 
    }   else if (inputayu.checked){
            spanmascotajugador.innerHTML = inputayu.id 
            image.src = ayu.foto
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
            nombremascotajugador= inputayu.id 
    }   else if (inputarmonia.checked){
            spanmascotajugador.innerHTML = inputarmonia.id 
            image.src = armonia.foto
            document.querySelector("div [id =imagenjugador] ").appendChild(image)
            nombremascotajugador= inputarmonia.id 
    }   else {
            alert("No Seleccionaste")
            reiniciar()
        } 
        
        seleccionarmokepon (nombremascotajugador)
        extraerAtaques(nombremascotajugador)
        seccionmapa.style.display = "flex"
        iniciarmapa () 
}

function seleccionarmokepon (nombremascotajugador) {
        fetch (`http://localhost:8080/mokepon/${jugadorId}`, {
                method:"post",
                headers:{
                    "Content-Type" :  "application/json"    
                }, 
                body: JSON.stringify({
                        mokepon: nombremascotajugador
                })
        })
}
function mascotaenemigo (enemigo) {
    const image =document.createElement ('img')
    
    spanmascotaenemigo.innerHTML = enemigo.nombre
    image.src = enemigo.foto
    document.querySelector("div [id =imagenenemigo] ").appendChild(image)    
    nombremascotaenemigo = enemigo  
    ataquemokeponenemigo=  enemigo.ataques
    secuenciaataques()

}  
function extraerAtaques(nombremascotajugador) {
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if (nombremascotajugador === mokepones[i].nombre) {
                ataques = mokepones [i].ataques
            }  
        }
        mostrarataques(ataques)
}       
function mostrarataques (ataques) {
        ataques.forEach ((ataque) => {
                ataquesmokepon = `<button id=${ataque.id} class="botones-de-ataque bataque"> ${ataque.nombre} </button> `
                contenedorataques.innerHTML += ataquesmokepon
        })
                  
        botonataqueagua = document.getElementById("boton-agua")
        botonataquetierra = document.getElementById("boton-tierra")
        botonataqueaire = document.getElementById("boton-aire")
        botonataquefuego = document.getElementById("boton-fuego")
        botones = document.querySelectorAll(".bataque")
 }
function secuenciaataques (){
        botones.forEach((boton) =>{
                boton.addEventListener ("click", (e) => 
                { console.log (e)
                        if (e.target.textContent === " 🔥 "){
                                ataquejugador.push ("FUEGO")
                                console.log(ataquejugador)
                                boton.style.background = "#727B57"
                                boton.disabled=true
                        } else if (e.target.textContent === " 💧 "){       
                                ataquejugador.push ("AGUA")
                                console.log(ataquejugador)
                                boton.style.background = "#727B57"
                                boton.disabled=true
                        }else if (e.target.textContent === " 🌀 "){
                                ataquejugador.push ("AIRE")
                                console.log(ataquejugador)
                                boton.style.background = "#727B57"
                                boton.disabled=true
                        } else if  (e.target.textContent === " 🗻 ")      { ataquejugador.push ("TIERRA")
                                console.log(ataquejugador)
                                boton.style.background = "#727B57"  
                                boton.disabled=true 
                        }  else {alert("hay un error")
                        }
                        ataquealeatorioenemigo ()
                        })                     
        })
}
function ataquealeatorioenemigo () {
        let ataquealeatorio = Math.floor(Math.random() * (ataquemokeponenemigo.length) )

        if (ataquealeatorio == 0) {
                simboloataque = ataquemokeponenemigo[0].nombre
        } else if (ataquealeatorio == 1) {
                simboloataque = ataquemokeponenemigo[1].nombre
        }else if (ataquealeatorio == 2) {
                simboloataque = ataquemokeponenemigo[2].nombre
        } else if (ataquealeatorio == 3) {
                simboloataque = ataquemokeponenemigo[3].nombre
        } else if (ataquealeatorio == 4) {
                simboloataque = ataquemokeponenemigo[4].nombre
        } else if (ataquealeatorio == 5) {
                simboloataque = ataquemokeponenemigo[5].nombre
        }
        else {alert("hay un error")
        }

        if (simboloataque === "🔥") {
                ataqueenemigo.push ("FUEGO")
        } else if (simboloataque === "💧") {
                ataqueenemigo.push ("AGUA")
        }else if (simboloataque === "🗻") {
                ataqueenemigo.push ("TIERRA")
        }else if (simboloataque === "🌀") {
                ataqueenemigo.push ("AIRE")
        }else {alert("hay un error")
        }        

        console.log (ataqueenemigo)
        juego()
}
function juego () {
        
        if ( ataquejugador [ataquejugador.length -1] == ataqueenemigo [ataqueenemigo.length -1]) {
                resultado = "EMPATE 🤦‍♂️"
        }
        else if (ataquejugador [ataquejugador.length -1] == 'AGUA' && ataqueenemigo [ataqueenemigo.length -1] == "FUEGO"){
                resultado = "GANASTE ❗"
                ganadasjugador ++
                spanvidasjugador.innerHTML = ganadasjugador
        } else if (ataquejugador [ataquejugador.length -1] == 'AIRE' && ataqueenemigo [ataqueenemigo.length -1] == "FUEGO"){
                resultado = "GANASTE ❗" 
                ganadasjugador ++
                spanvidasjugador.innerHTML = ganadasjugador
        } else if (ataquejugador [ataquejugador.length -1] == 'FUEGO' && ataqueenemigo [ataqueenemigo.length -1] == "TIERRA"){
                resultado = "GANASTE ❗"
                ganadasjugador ++
                spanvidasjugador.innerHTML = ganadasjugador
        } else if (ataquejugador [ataquejugador.length -1] == 'TIERRA' && ataqueenemigo [ataqueenemigo.length -1] == "AGUA"){
                resultado = "GANASTE ❗" 
                ganadasjugador ++
                spanvidasjugador.innerHTML = ganadasjugador
        } else if (ataquejugador [ataquejugador.length -1] == 'AGUA' && ataqueenemigo [ataqueenemigo.length -1] == "AIRE"){
                resultado = "GANASTE ❗"
                ganadasjugador ++
                spanvidasjugador.innerHTML = ganadasjugador
        } else if (ataquejugador [ataquejugador.length -1] == 'TIERRA' && ataqueenemigo [ataqueenemigo.length -1] == "AIRE"){
                resultado = "GANASTE ❗"       
                ganadasjugador ++
                spanvidasjugador.innerHTML = ganadasjugador}
        else {
                resultado = "PERDISTE 💔"
                ganadasenemigo ++
                spanvidasenemigo.innerHTML = ganadasenemigo 
        }
       mensajes ()
       resultadototal ()
}
function mensajes (){        
        let nuevoataqueenemigo = document.createElement ("p")
        let nuevoataquejugador = document.createElement ("p")

        mresultado.innerHTML = resultado
        nuevoataquejugador.innerHTML= ataquejugador [ataquejugador.length -1]
        nuevoataqueenemigo.innerHTML= ataqueenemigo [ataqueenemigo.length -1]

        mataquejugador.appendChild(nuevoataquejugador)
        
        mataquesenemigo.appendChild(nuevoataqueenemigo)    
}
function resultadototal (){
        if (ataquejugador.length == ataquemokeponenemigo.length) {
                mensajefinal ()
        } else {}
}
function mensajefinal () {
        seccionreiniciar.style.display = "block"  
        
        if (ganadasjugador > ganadasenemigo) {
                resultadofinal = ("GANADOR")
        } else if (ganadasjugador < ganadasenemigo) {
                resultadofinal = ("GAME OVER")
        } else if (ganadasjugador == ganadasenemigo) {
                resultadofinal = ("EMPATE")
        } else {}
        setionmensajes.innerHTML = resultadofinal                  
}
function reiniciar () {
        seccionataque.style.display = "none"
        seccionreiniciar.style.display = "none"
        location.reload ()
}
function pintarcanva () {
        jugadorobjeto.x = jugadorobjeto.x + jugadorobjeto.velocidadx
        jugadorobjeto.y = jugadorobjeto.y + jugadorobjeto.velocidady
        lienzo.clearRect(0, 0, mapa.width, mapa.height)
        lienzo.drawImage (
                imagenmapa,
                0,
                0,
                mapa.width,
                mapa.height
        )
        furiaenemigo.pintarmokepon()
        tiloneenemigo.pintarmokepon()
        armoniaenemigo.pintarmokepon()
        ayuenemigo.pintarmokepon()
        airenemigo.pintarmokepon()
        ferozenemigo.pintarmokepon()
        aquaenemigo.pintarmokepon()
        terrorenemigo.pintarmokepon()
        jugadorobjeto.pintarmokepon()
        cordenadas(jugadorobjeto.x, jugadorobjeto.y)


        if (jugadorobjeto.velocidadx !==0 || jugadorobjeto.velocidady !== 0) {
                colisiones(furiaenemigo)
                colisiones(ayuenemigo)
                colisiones(airenemigo)
                colisiones(aquaenemigo)
                colisiones(terrorenemigo)
                colisiones(tiloneenemigo)
                colisiones(ferozenemigo)
                colisiones(armoniaenemigo)
        }
        
}
function cordenadas (x, y) {
        fetch (`http://localhost:8080/mokepon/${jugadorId}/posicion`, {       
        method:"post",
                headers: {
                        "Content-Type" : "application/json"
                },
                body: JSON.stringify ({
                        x,
                        y
                })
        })

        .then (function(res) {
                if (res.ok) {
                      res.json()
                      .then (function ({enemigos}) {
                        console.log (enemigos)
                      })
                }
        })
        
}

function moverderecha() {
        jugadorobjeto.velocidadx= 5  
}
function moverarriba()  {
        jugadorobjeto.velocidady = - 5     
  }
function moverabajo() {
        jugadorobjeto.velocidady = 5    
  }
function moverizquierda() {
        jugadorobjeto.velocidadx= -5    
}
function detenermovimiento() {
        jugadorobjeto.velocidadx= 0
        jugadorobjeto.velocidady= 0
} 
function teclapresionada (event){
        switch (event.key) {
                case 'ArrowUp':
                        moverarriba()
                        break
                case "ArrowDown":
                        moverabajo()
                        break
                case "ArrowLeft" :
                        moverizquierda ()
                        break
                case "ArrowRight":
                        moverderecha ()
                        break
                default:
                        break
        }
}
function iniciarmapa () {
        
        jugadorobjeto = jugadorcompleto (nombremascotajugador)
        intervalo= setInterval(pintarcanva, 50)
        window.addEventListener("keydown", teclapresionada)
        window.addEventListener("keyup", detenermovimiento)
}
function jugadorcompleto() {
        for (let i = 0; i < mokepones.length; i++) {
            if (nombremascotajugador === mokepones[i].nombre) {
                return mokepones [i]
                
            }  
        }
}

function colisiones (enemigo) {
        const arribaenemigo = enemigo.y
        const abajoenemigo = enemigo.y + enemigo.alto
        const derechaenemigo = enemigo.x + enemigo.ancho
        const izquierdaenemigo = enemigo.x

        const arribajugador =jugadorobjeto.y
        const abajojugador= jugadorobjeto.y + jugadorobjeto.alto
        const derechajugador = jugadorobjeto.x + jugadorobjeto.ancho
        const izquierdajugador = jugadorobjeto.x

        if (
                abajojugador < arribaenemigo ||
                arribajugador > abajoenemigo ||
                derechajugador < izquierdaenemigo ||
                izquierdajugador > derechaenemigo
        ){
                return
        }

        detenermovimiento ()
        clearInterval (intervalo)
        seccionmapa.style.display = "none"
        seccionataque.style.display = "flex"
        mascotaenemigo(enemigo)
        console.log (enemigo)
}
window.addEventListener("load", iniciarJuego)

const express = require ("express")
const cors = require ("cors")
const app = express()
app.use(cors ())
app.use(express.json())
app.use(express.static('public'))

const jugadores = []

class Jugador {
    constructor(id){
    this.id = id
    }

    asignarMokepon(mokepon) {
        this.mokepon = mokepon
    }

    cordenadas (x,y) {
        this.x= x 
        this.y= y 
    }
     
    asignarAtaques(ataques) {
        this.ataques = ataques
      }
}
class Mokepon {
    constructor(nombre){
    this.nombre = nombre
    }
}

app.get ("/unirse",(req,res) => {
    const id = `${Math.random()}`
    const jugador = new Jugador (id)

    jugadores.push (jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)

})

app.post ("/mokepon/:jugadorId", (req,res) => {
        const jugadorId = req.params.jugadorId || ""
        const nombre = req.body.mokepon || ""
        const mokepon = new Mokepon (nombre)

        const jugadorindex= jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
        if (jugadorindex >= 0) {
            jugadores [jugadorindex].asignarMokepon(mokepon)
        }

        console.log (jugadores)
        console.log (jugadorId)
        res.end ()
})

app.post("/mokepon/:jugadorId/posicion", (req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const x = req.body.x || 0
    const y = req.body.y || 0

    const jugadorindex= jugadores.findIndex((jugador) => jugadorId === jugador.id)
    
        if (jugadorindex >= 0) {
            jugadores [jugadorindex].cordenadas(x,y)
        }
    
    const enemigos= jugadores.filter ((jugador) => jugadorId !== jugador.id)

    res.send({
        enemigos
    })
        

})
app.post ("/mokepon/:jugadorId/ataques", (req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const ataques = req.body.ataques || []
    
    const jugadorindex= jugadores.findIndex((jugador) => jugadorId === jugador.id)

    if (jugadorindex >= 0) {
        jugadores [jugadorindex].asignarAtaques(ataques)
    }
    console.log (jugadores)
    res.end ()
})

app.get("/mokepon/:jugadorId/ataques", (req,res) => {
    const jugadorId = req.params.jugadorId || ""
    const jugador = jugadores.find((jugador) => jugador.id === jugadorId)
    res.send({
        ataques: jugador.ataques || []
    })
})


app.listen(8080, () => {
    console.log ("Sevidor funcionando")
})
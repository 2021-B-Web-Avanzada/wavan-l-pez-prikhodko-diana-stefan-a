import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer} from "@nestjs/websockets";
import { Server, Socket } from 'socket.io';
import {SalasInterface} from "../Interfaces/salas.interface";

@WebSocketGateway(
    8080,
    {
        cors:{
            origin: '*'
        }
    }
)

export class EventosGateway{

    //Almacenar la información las salas y los jugadores
    arregloSalasJugadores : SalasInterface [] = []
    @WebSocketServer()
        server: Server

    @SubscribeMessage('unirseSala')
    unirJugadorSala(
        @MessageBody()
        message,
        @ConnectedSocket()
        socket: Socket
    ){
        socket.join(message.salaId)
        const salaExiste = this.getSala(message.salaId)

        if(salaExiste){
            salaExiste.listaJugadores.push(message.apodo)
            this.server.to(message.salaId).emit('RespuestaUnirseSala', {mensaje:'Nuevo Jugador'})
        } else {
            const salaNueva :SalasInterface = {salaId: message.salaId, listaJugadores: [message.apodo], jugadorTurno: message.apodo, listaPalabras: ['Mundo']}
            this.arregloSalasJugadores.push(salaNueva)
            socket.emit('RespuestaUnirseSala', {mensaje:'Bienvenido al Juego'})
        }

    }

    getSala(salaId: string){
        console.log(this.arregloSalasJugadores)
        let salaEncontrada: SalasInterface
        this.arregloSalasJugadores.forEach(
            sala => {
                console.log(sala.salaId)
                if(sala.salaId === salaId){
                    salaEncontrada = sala
                }
            }
        )
        return salaEncontrada
    }

    @SubscribeMessage('nuevaPalabra')
    nuevaPalabra(
        @MessageBody()
            message,
        @ConnectedSocket()
            socket: Socket
    ){
        const salaExiste = this.getSala(message.salaId)
        //console.log(salaExiste)
        //console.log(message.salaId)
        console.log("Se recibe", message.palabra)
        if(salaExiste) {
            salaExiste.listaPalabras.push(message.palabra)
            let siguienteJugadorIndex = salaExiste.listaJugadores.indexOf(salaExiste.jugadorTurno) + 1
            if(siguienteJugadorIndex >= salaExiste.listaJugadores.length){
                siguienteJugadorIndex = 0
            }
            const siguienteJugador = salaExiste.listaJugadores[siguienteJugadorIndex]
            salaExiste.jugadorTurno = siguienteJugador
            this.server.to(message.salaId).emit('RespuestaPalabraNueva', {mensaje:'Palabra Añadida', turno: siguienteJugador})
        }
    }

    @SubscribeMessage('listaDePalabras')
    listaDePalabras(
        @MessageBody()
            message,
        @ConnectedSocket()
            socket: Socket
    ){
        const salaExiste = this.getSala(message.salaId)
        if(salaExiste){
            socket.emit('RespuestaListaDePalabras', {listaPalabras: salaExiste.listaPalabras, turno: salaExiste.jugadorTurno})
        }
    }
}
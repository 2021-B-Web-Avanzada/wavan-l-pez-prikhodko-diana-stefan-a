import {ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway} from "@nestjs/websockets";
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
            socket.to(message.salaId).emit('RespuestaUnirseSala', {mensaje:'Nuevo Jugador'})
        } else {
            const salaNueva :SalasInterface = {salaId: message.salaId, listaJugadores: [message.apodo], jugadorTurno: message.apodo}
            this.arregloSalasJugadores.push(salaNueva)
            socket.emit('RespuestaUnirseSala', {mensaje:'Bienvenido al Juego'})
        }

    }

    getSala(salaId: string){
        let salaEncontrada: SalasInterface
        this.arregloSalasJugadores.forEach(
            sala => {
                if(sala.salaId === salaId){
                    salaEncontrada = sala
                }
            }
        )
        return salaEncontrada
    }
}
import { Socket } from 'socket.io';
import { SalasInterface } from "../Interfaces/salas.interface";
export declare class EventosGateway {
    arregloSalasJugadores: SalasInterface[];
    unirJugadorSala(message: any, socket: Socket): void;
    getSala(salaId: string): SalasInterface;
}

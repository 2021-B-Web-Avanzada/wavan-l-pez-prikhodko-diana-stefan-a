"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventosGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
let EventosGateway = class EventosGateway {
    constructor() {
        this.arregloSalasJugadores = [];
    }
    unirJugadorSala(message, socket) {
        socket.join(message.salaId);
        const salaExiste = this.getSala(message.salaId);
        if (salaExiste) {
            salaExiste.listaJugadores.push(message.apodo);
            socket.to(message.salaId).emit('RespuestaUnirseSala', { mensaje: 'Nuevo Jugador' });
        }
        else {
            const salaNueva = { salaId: message.salaId, listaJugadores: [message.apodo], jugadorTurno: message.apodo };
            this.arregloSalasJugadores.push(salaNueva);
            socket.emit('RespuestaUnirseSala', { mensaje: 'Bienvenido al Juego' });
        }
    }
    getSala(salaId) {
        let salaEncontrada;
        this.arregloSalasJugadores.forEach(sala => {
            if (sala.salaId === salaId) {
                salaEncontrada = sala;
            }
        });
        return salaEncontrada;
    }
};
__decorate([
    (0, websockets_1.SubscribeMessage)('unirseSala'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], EventosGateway.prototype, "unirJugadorSala", null);
EventosGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(8080, {
        cors: {
            origin: '*'
        }
    })
], EventosGateway);
exports.EventosGateway = EventosGateway;
//# sourceMappingURL=eventos.gateway.js.map
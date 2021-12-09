//02-interfaces.ts
var _this = this;
var usuario = {
    nombre: "Diana",
    apellido: "Lopez",
    edad: 21,
    sueldo: 20.2,
    casado: 0,
    estado: "AC",
    imprimirUsuario: function (mensaje) {
        return "El mensaje es: " + mensaje;
    },
    calcularImpuestos: function (impuestos) {
        return _this.sueldo + _this.sueldo * impuestos;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case "AC":
                return "AP";
            case "IN":
                return "AF";
            case "BN":
                return "AT";
        }
    }
};

//02-interfaces.ts

interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number; //Opcional = number | undefined --- o mejor ?
    sueldo?: number; //Opcional
    casado: boolean | 0 | 1;
    estado: "AC"  | "IN" | "BN";
    imprimirUsuario: (mensaje: string) => string | "BN";
    calcularImpuestos: (impuestos : number) => number;
    estadoActual: () => "AP" | "AF" | "AT";
    //calcularImpuestos paramentro numero impuestos, sueldo + sueldo * impuestos
    //estadoActual n orecibe parametros,  "AP"  "AF" "AT";
}

let usuario: Usuario = {
    nombre: "Diana",
    apellido: "Lopez",
    edad: 21,
    sueldo: 20.2,
    casado: 0,
    estado: "AC",
    imprimirUsuario : (mensaje)=>{
        return "El mensaje es: " + mensaje;
    },
    calcularImpuestos: impuestos => {
        return this.sueldo + this.sueldo * impuestos;
    },
    estadoActual : () =>{
        switch (this.estado){
            case "AC":
                return "AP";
            case "IN":
                return "AF";
            case "BN":
                return "AT";
        }
    }
}
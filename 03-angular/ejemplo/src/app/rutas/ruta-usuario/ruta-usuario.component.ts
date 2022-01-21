import { Component, OnInit } from '@angular/core';
import {UserJphService} from "../../servicios/http/user-jph.service";
import {UserJphInterface} from "../../servicios/http/interfaces/user-jph.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-usuario',
  templateUrl: './ruta-usuario.component.html',
  styleUrls: ['./ruta-usuario.component.scss']
})
export class RutaUsuarioComponent implements OnInit {

  //Inicializar un arreglo vacío
  arreglo: UserJphInterface[] =[];

  buscarUsuario = ""

  constructor(
    private readonly userJphService:UserJphService,
    private readonly router:Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // Declaración del Observable
    const parametrosConsulta$ = this.activatedRoute
      .queryParams;

    parametrosConsulta$
     .subscribe( //Aquí empieza a ejecutarse el observable
       {
         next: (queryParams) => { //Try
           console.log(queryParams);
           this.buscarUsuario = queryParams["name"]
           this.buscarUsuarios();
         },
         error: () => {},
         complete: () => {}
       }
     );
  }

  actualizarParametrosDeConsulta(){
    this.router
      .navigate(
        ['/app','usuario'], //armamos la URL /app/usuario
        {
          queryParams:{
            name: this.buscarUsuario //?name=NOMBRE_DE_ALGUIEN
          }
        });
  }

  buscarUsuarios(){
    this.userJphService
      .buscarTodos({
          name: this.buscarUsuario
        })
      .subscribe({
        next: (datos: UserJphInterface[]) =>{ //try
          this.arreglo = datos;
          this.buscarUsuario = '';
        },
        error: (error) =>{ //catch
          console.error({error});
        }
      })
  }

  gestionarUsuarios (idUsuario: number){
    const ruta = ['/app','usuario',idUsuario]; // => /app/usuario/1
    this.router.navigate(ruta);
  }
}







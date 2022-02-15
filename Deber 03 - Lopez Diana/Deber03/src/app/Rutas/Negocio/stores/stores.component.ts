import { Component, OnInit } from '@angular/core';
import {StoreInterface} from "../../../Interfaces/store.interface";
import {MongoDataService} from "../../../Servicios/mongo-data.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.scss']
})
export class StoresComponent implements OnInit {

  arregloTiendas: StoreInterface[] = [];
  buscarTienda = ""

  constructor(
    private readonly mongoDataService: MongoDataService,
    private readonly _router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    const parametrosConsulta$ = this.activatedRoute
      .queryParams;

    parametrosConsulta$
      .subscribe(
        {
          next: (queryParams) => {
            console.log(queryParams);
            this.buscarTiendas();
          },
          error: () => {},
          complete: () => {}
        }
      );
  }

    buscarTiendas(){
      this.mongoDataService
        .buscarTodasTiendas({
          name: this.buscarTienda
        })
        .subscribe({
          next: (datos: StoreInterface[]) =>{ //try
            this.arregloTiendas = datos;
          },
          error: (error) =>{ //catch
            console.error({error});
          }
        })
    }

    editarTienda(codeStore: string){
      const ruta = ['/stores','updateStore',codeStore];
      this._router.navigate(ruta);
    }

    crearTienda(){
      const ruta = ['/stores','createStore'];
      this._router.navigate(ruta);
    }

    eliminarTienda(codeStore: string){
      const eliminar$ = this.mongoDataService
        .eliminarTienda(codeStore)
      eliminar$
        .subscribe({
          next: (datos) =>{
            alert("Se ha eliminado exitosamente la Tienda");
            window.location.reload();
          }
        })
    }

    verProductos(codeStore:string){
      const ver$ = this.mongoDataService
        .verTodosProductos(codeStore)
      ver$
        .subscribe({
          next: (datos) => {
            const ruta = ['/stores',codeStore,'clothing'];
            this._router.navigate(ruta);
          }
        })
    }
}

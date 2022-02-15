import { Component, OnInit } from '@angular/core';
import {MongoDataService} from "../../../Servicios/mongo-data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClothingInterface} from "../../../Interfaces/clothing.interface";

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.scss']
})
export class ClothingComponent implements OnInit {

  arregloRopa: ClothingInterface[] = [];
  idTienda = ""
  buscarRopa = ""

  constructor(
    private readonly mongoDataService: MongoDataService,
    private readonly _router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //Obtener el Id y llenar los datos
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          this.idTienda = parametrosRuta['codeStore'];
          console.log(this.idTienda)
          this.buscarRopas();
        },
        error: (err) => {
          console.log(err)
        }
      });
  }
  buscarRopas(){
    this.mongoDataService
      .buscarTodosProductos(
        this.idTienda
      ,{
        name: this.buscarRopa
      })
      .subscribe({
        next:(datos: ClothingInterface[]) => {
          this.arregloRopa = datos;
        },
        error: (error) =>{
          console.error({error});
        }
      })
  }

  editarRopa(clothingCode: string){
    const ruta = ['/stores',this.idTienda,'clothing','updateClothing',clothingCode];
    this._router.navigate(ruta);
  }

  eliminarRopa(clothingCode: string){
    const eliminar$ = this.mongoDataService
      .eliminarRopa(this.idTienda, clothingCode)
    eliminar$
      .subscribe({
        next: (datos) => {
          alert("Se ha eliminado exitosamente la Ropa");
          window.location.reload();
        }
      })
  }

  crearRopa(){
    const ruta = ['/stores',this.idTienda,'clothing','createClothing'];
    this._router.navigate(ruta);
  }

  regresar(){
    const url = ['/stores']
    this._router.navigate(url);
  }
}

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

  }

  eliminarRopa(clothingCode: string){

  }

  crearRopa(){

  }

  regresar(){
    const url = ['/stores']
    this._router.navigate(url);
  }
}

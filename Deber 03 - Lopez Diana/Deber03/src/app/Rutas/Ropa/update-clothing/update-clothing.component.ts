import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MongoDataService} from "../../../Servicios/mongo-data.service";
import {ClothingInterface} from "../../../Interfaces/clothing.interface";

@Component({
  selector: 'app-update-clothing',
  templateUrl: './update-clothing.component.html',
  styleUrls: ['./update-clothing.component.scss']
})
export class UpdateClothingComponent implements OnInit {

  formGroup?: FormGroup;
  ropa?: ClothingInterface;
  idTienda = ""
  idRopa = ""

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly mongoDataService: MongoDataService,
  ) { }

  ngOnInit(): void {

    //Obtener el Id y llenar los datos
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          this.idTienda = parametrosRuta['codeStore'];
          this.idRopa = parametrosRuta['codeClothing'];
          this.buscarRopa(this.idTienda ,this.idRopa);
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

  buscarRopa(codeStore: string, codeClothing: string) {
    const buscarUsuarioPorId$ = this.mongoDataService.buscarUnaRopa(codeStore, codeClothing);
    buscarUsuarioPorId$.subscribe({
      next: (data) => {
        this.ropa = data;
        this.prepararFormulario();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  prepararFormulario(){
    this.formGroup = this.formBuilder
      .group({
        code: new FormControl({
            value: this.ropa? this.ropa.code: '',
            disabled: false
          },
          [Validators.required]
        ),
        name: new FormControl({
            value: this.ropa? this.ropa.name: '',
            disabled: false
          },
          [Validators.required]
        ),
        price: new FormControl({
            value: this.ropa? this.ropa.price: '',
            disabled: false
          },
          [Validators.required]
        ),
        size: new FormControl({
            value: this.ropa? this.ropa.size: '',
            disabled: false
          },
          [Validators.required]
        ),
        stock: new FormControl({
            value: this.ropa? this.ropa.stock: '',
            disabled: false
          },
          [Validators.required]
        ),
        topSelling: new FormControl({
            value: this.ropa? this.ropa.topSelling: '',
            disabled: false
          },
          [Validators.required]
        )
      })
  }

  prepararRopa() {
    if (this.formGroup) {
      const code = this.formGroup.get('code');
      const name = this.formGroup.get('name');
      const price = this.formGroup.get('price');
      const size = this.formGroup.get('size');
      const stock = this.formGroup.get('stock');
      const topSelling = this.formGroup.get('topSelling');
      const storeCode = this.idTienda;
      if (code != null && name != null && price != null && size != null && stock != null && topSelling != null && storeCode != null) {
        return {
          code: code.value,
          name: name.value,
          price: price.value,
          size: size.value,
          stock: stock.value,
          topSelling: topSelling.value,
          storeCode: storeCode
        }
      }
    }
    return {
      code: '', name: '', price: '', size: '', stock: '', topSelling: '', storeCode: ''
    }
  }


  editarRopa() {
    if(this.ropa) {
      const valoresAActualizar = this.prepararRopa();
      const actualizar$ = this.mongoDataService
        .editarRopa(
          this.idTienda,
          this.idRopa,
          valoresAActualizar
        );
      actualizar$
        .subscribe({
          next: (datos) =>{
            alert("Se ha actualizado exitosamente la Ropa");
            const url = ['/stores',this.idTienda,'clothing']
            this._router.navigate(url);
          },
          error: (error) => {
            console.error(error);
          }
        })
    }
  }

  regresar(){
    const url = ['/stores',this.idTienda,'clothing']
    this._router.navigate(url);
  }

}

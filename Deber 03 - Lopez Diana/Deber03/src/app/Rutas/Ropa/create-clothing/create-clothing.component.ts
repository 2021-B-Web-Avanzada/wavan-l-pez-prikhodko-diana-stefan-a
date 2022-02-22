import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ClothingComponent} from "../clothing/clothing.component";
import {ClothingInterface} from "../../../Interfaces/clothing.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {MongoDataService} from "../../../Servicios/mongo-data.service";

@Component({
  selector: 'app-create-clothing',
  templateUrl: './create-clothing.component.html',
  styleUrls: ['./create-clothing.component.scss']
})
export class CreateClothingComponent implements OnInit {

  formGroup?: FormGroup;
  ropa?: ClothingInterface;
  idTienda = ""

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly mongoDataService: MongoDataService,
    private readonly _router: Router,
    private readonly formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    //Obtener el Id y llenar los datos
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          this.idTienda = parametrosRuta['codeStore'];
        },
        error: (err) => {
          console.log(err)
        }
      });
    //Controlador del formulario

    this.formGroup = this.formBuilder
      .group({
        code: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        ),
        name: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        ),
        price: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        ),
        size: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        ),
        stock: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        ),
        topSelling: new FormControl({
            value: '',
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

  crearRopa() {
    const ropaCrear = this.prepararRopa();
    if(ropaCrear) {
      const crear$ = this.mongoDataService
        .crearRopa(
          this.idTienda,
          ropaCrear
        );
      crear$
        .subscribe({
          next: (datos) =>{
            alert("Se ha creado exitosamente la Ropa");
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

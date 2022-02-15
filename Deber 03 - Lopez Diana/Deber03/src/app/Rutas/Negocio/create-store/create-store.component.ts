import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {StoreInterface} from "../../../Interfaces/store.interface";
import {MongoDataService} from "../../../Servicios/mongo-data.service";

@Component({
  selector: 'app-create-store',
  templateUrl: './create-store.component.html',
  styleUrls: ['./create-store.component.scss']
})
export class CreateStoreComponent implements OnInit {

  formGroup?: FormGroup;
  tienda?: StoreInterface;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly mongoDataService: MongoDataService,
    private readonly _router: Router,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    //Controlador del formulario

    this.formGroup = this.formBuilder
      .group({
        code: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        ),
        nameStore: new FormControl({
          value: '',
          disabled: false
        },
          [Validators.required]
        ),
        address: new FormControl({
          value: '',
          disabled: false
        },
          [Validators.required]
        ),
        telephone: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        ),
        wholesaler: new FormControl({
            value: '',
            disabled: false
          },
          [Validators.required]
        )
      })

  }

  prepararTienda(){
    if (this.formGroup) {
      const code = this.formGroup.get('code');
      const nameStore = this.formGroup.get('nameStore');
      const address = this.formGroup.get('address');
      const telephone = this.formGroup.get('telephone');
      const wholesaler = this.formGroup.get('wholesaler');
      if (code != null && nameStore != null && address != null && telephone != null && wholesaler != null) {
        return{
          code: code.value,
          name: nameStore.value,
          address: address.value,
          telephone: telephone.value,
          wholesaler: wholesaler.value
        }
      }
    }
    return {code: '', nameStore: '', address: '', telephone: '', wholesaler: ''}
  }

  crearTienda() {
    const tiendaCrear = this.prepararTienda();
    if (tiendaCrear) {
      const crear$ = this.mongoDataService
        .crearTienda(
          tiendaCrear as StoreInterface
        );
      crear$
        .subscribe({
          next: (datos) => {
            console.log(datos);
            alert("Se ha creado exitosamente la Tienda");
            const url = ['/stores'];
            this._router.navigate(url);
          },
          error: (error) => {
            console.error(error);
          }
        })
    }
  }

  regresar(){
    const url = ['/stores']
    this._router.navigate(url);
  }


}

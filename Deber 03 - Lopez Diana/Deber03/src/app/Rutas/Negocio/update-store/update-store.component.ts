import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {MongoDataService} from "../../../Servicios/mongo-data.service";
import {StoreInterface} from "../../../Interfaces/store.interface";

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.scss']
})
export class UpdateStoreComponent implements OnInit {

  formGroup?: FormGroup;
  tienda?: StoreInterface;
  idTienda = "";

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly _router: Router,
    private readonly mongoDataService: MongoDataService,
  ) {
  }

  ngOnInit(): void {

    //Obtener el Id y llenar los datos
    const parametroRuta$ = this.activatedRoute.params
    parametroRuta$
      .subscribe({
        next: (parametrosRuta) => {
          this.idTienda += parametrosRuta['codeStore'];
          this.buscarTienda(this.idTienda);
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

  buscarTienda(codeStore: string) {
    const buscarUsuarioPorId$ = this.mongoDataService.buscarUnaTienda(codeStore);
    buscarUsuarioPorId$.subscribe({
      next: (data) => {
        this.tienda = data;
        this.prepararTienda();
      },
      error: (error) => {
        console.error(error);
      }
    })
  }

  prepararTienda() {
    this.formGroup = this.formBuilder
      .group({
        code: new FormControl({
            value: this.tienda ? this.tienda.code : '',
            disabled: false
          },
          [Validators.required]
        ),
        nameStore: new FormControl({
            value: this.tienda?.name,
            disabled: false
          },
          [Validators.required]
        ),
        address: new FormControl({
            value: this.tienda?.address,
            disabled: false
          },
          [Validators.required]
        ),
        telephone: new FormControl({
            value: this.tienda?.telephone,
            disabled: false
          },
          [Validators.required]
        ),
        wholesaler: new FormControl({
            value: this.tienda?.wholesaler,
            disabled: false
          },
          [Validators.required]
        )
      })
  }

  prepararObjeto() {
    if (this.formGroup) {
      const code = this.formGroup.get('code');
      const nameStore = this.formGroup.get('nameStore');
      const address = this.formGroup.get('address');
      const telephone = this.formGroup.get('telephone');
      const wholesaler = this.formGroup.get('wholesaler');
      if (code != null && nameStore != null && address != null && telephone != null && wholesaler != null) {
        return {
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

  editarTienda() {
    if (this.tienda) {
      const valoresAActualizar = this.prepararObjeto();
      const actualizar$ = this.mongoDataService
        .editarTienda(this.tienda.code, valoresAActualizar as StoreInterface);
      actualizar$
        .subscribe({
          next: (datos) => {
            alert("Se actualizó exitosamente la Tienda");
            const url = ['/stores'];
            this._router.navigate(url);
          },
          error: (error) =>{
            console.error(error);
          }
        })
    }
  }

  regresar() {
    const url = ['/stores']
    this._router.navigate(url);
  }
}

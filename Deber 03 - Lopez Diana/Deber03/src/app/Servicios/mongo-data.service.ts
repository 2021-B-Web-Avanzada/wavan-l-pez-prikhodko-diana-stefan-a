import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from 'rxjs';
import {StoreInterface} from "../Interfaces/store.interface";
import {environment} from "../../environments/environment";
import {ClothingInterface} from "../Interfaces/clothing.interface";

@Injectable({
  providedIn: 'any'
})
export class MongoDataService {

  constructor(
    private readonly httpCliente: HttpClient
  ) {
  }

  // MANEJO TIENDAS

  buscarTodasTiendas(parametrosConsulta?: any): Observable<StoreInterface[]> {
    const url = environment.urlMongo + 'clothingStore';
    Object
      .keys(parametrosConsulta)
      .forEach(k => {
        if (!parametrosConsulta[k]) {
          delete parametrosConsulta[k]
        }
      })
    return this.httpCliente
      .get(url, {
        params: parametrosConsulta
      })
      .pipe(map(
        (resultadoEnDate) => resultadoEnDate as StoreInterface[]
      ));
  }

  buscarUnaTienda(codeStore: string): Observable<StoreInterface> {
    const url = environment.urlMongo + 'clothingStore/' + codeStore;
    return this.httpCliente
      .get(url)
      .pipe(
        map(
          (resultadoEnDate) => resultadoEnDate as StoreInterface
        )
      );
  }

  editarTienda(
    codeStore: string,
    datosActualizar: StoreInterface
  ): Observable<StoreInterface> {
    const url = environment.urlMongo + 'clothingStore/' + codeStore;
    return this.httpCliente
      .patch(url, datosActualizar)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as StoreInterface
      ))
  }

  crearTienda(
    datosACrear: StoreInterface
  ): Observable<StoreInterface> {
    const url = environment.urlMongo + 'clothingStore'
    return this.httpCliente
      .post(url, datosACrear)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as StoreInterface
      ))
  }

  eliminarTienda(
    codeStore: string
  ): Observable<StoreInterface> {
    const url = environment.urlMongo + 'clothingStore/' + codeStore;
    return this.httpCliente
      .delete(url)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as StoreInterface
      ))
  }

  verTodosProductos(
    codeStore: string
  ): Observable<StoreInterface> {
    const url = environment.urlMongo + "clothingStore/" + codeStore + "/clothing";
    return this.httpCliente
      .get(url)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as StoreInterface
      ))
  }


  //MANEJO ROPA

  buscarTodosProductos(
    codeStore: string,
    parametrosConsulta?: any
  ): Observable<ClothingInterface[]> {
    const url = environment.urlMongo + 'clothingStore/' + codeStore + '/clothing';
    Object
      .keys(parametrosConsulta)
      .forEach(k => {
        if (!parametrosConsulta[k]) {
          delete parametrosConsulta[k]
        }
      })
    return this.httpCliente
      .get(url, {
        params: parametrosConsulta
      })
      .pipe(map(
        (resultadoEnDate) => resultadoEnDate as ClothingInterface[]
      ));
  }
}

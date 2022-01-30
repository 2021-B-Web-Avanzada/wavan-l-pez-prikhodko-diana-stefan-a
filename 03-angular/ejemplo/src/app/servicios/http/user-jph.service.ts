import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {UserJphInterface} from "./interfaces/user-jph.interface";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {UserJphCreateInterface} from "./interfaces/user-jph-create-interface";

@Injectable({
  providedIn: 'any'
})
export class UserJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscarTodos(parametrosConsulta?: any): Observable<UserJphInterface[]>{
    const url = environment.urlJPC + 'users';
    Object
      .keys(parametrosConsulta)
      .forEach( k => {
        if (!parametrosConsulta[k]){
          delete parametrosConsulta[k]
        }
      })

    return this.httpClient
      .get(
        url,
        {
          params: parametrosConsulta
        }
        )
      .pipe(
        map(
          (resultadoEnDate) => resultadoEnDate as UserJphInterface[]
        )
      );
  }

  buscarUno(idUsuario: number): Observable<UserJphInterface>{
    const url = environment.urlJPC + 'users/' + idUsuario;
    return this.httpClient
      .get(url)
      .pipe(
          map(
      (resultadoEnDate) => resultadoEnDate as UserJphInterface
      )
      );
  }

  actualizarPorId(
    idUsuario: number,
    datosActualizar: UserJphCreateInterface
  ): Observable<UserJphInterface>{
    const url = environment.urlJPC + 'users/' + idUsuario;
    return this.httpClient
      .put(url,datosActualizar)
      .pipe(map(
        (resultadoEnData) => resultadoEnData as UserJphInterface
      ))
  }
}

import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthService} from "./auth.service";
import {Observable} from "rxjs";

@Injectable()
export class EstaLogeadoGuard implements CanActivate {

  //Inyección de dependencias
  constructor(
    private readonly _authService:AuthService,
    private readonly  _router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this._authService.estaLogeado){
      //Se usa cuando no se maneja <a></a>
      this._router.navigate(['/forbidden'])
    }
    return this._authService.estaLogeado;
  }

}

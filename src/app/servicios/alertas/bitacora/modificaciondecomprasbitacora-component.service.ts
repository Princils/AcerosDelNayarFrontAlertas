import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../../config/api-config';

@Injectable({
  providedIn: 'root'
})
export class ModificaciondecomprasbitacoraComponentService {

  constructor(private clientHttp:HttpClient) { }

  GetFacturasProveedoresProximasAVencerCompras(){
    return this.clientHttp.get(API_URL+"alert/FacturasProveedoresProximasAVencerCompras")
  }
  
  PostModificacionesDeComprasBitacoras(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/ModificacionesDeComprasBitacoras", formulario);
  }

}

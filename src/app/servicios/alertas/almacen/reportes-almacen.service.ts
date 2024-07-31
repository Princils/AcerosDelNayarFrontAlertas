import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../config/api-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesAlmacenService {

  constructor(private clientHttp:HttpClient) { }

/***************************************************************************************************************/
/*								Alerta de máximos y mínimos cuando llegan al mínimo de un almacén siempre y cuando, se alerta por almacen	                               */
/***************************************************************************************************************/
ProductosConAlmacenAlMinimoAlmacen(formulario: any): Observable<any> {
  return this.clientHttp.post(API_URL + "alert/Almacen/ProductosConAlmacenAlMinimoAlmacen", formulario);
}

}

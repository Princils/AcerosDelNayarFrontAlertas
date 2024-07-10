
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../config/api-config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReportesDocumentosService {
  constructor(private clientHttp:HttpClient) { }


  
  PostComprasSinGastosSobreCompras(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/documentos/ComprasSinGastosSobreCompras", formulario);
  }

  PostComprasSinFechaDescuentoProntoPagoDocumentos(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/documentos/ComprasSinFechaDescuentoProntoPagoDocumentos", formulario);
  }
  
}

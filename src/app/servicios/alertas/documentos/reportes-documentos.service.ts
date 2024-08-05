
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

  PostFacturasVencidasDiaAntes(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/documentos/FacturasVencidasDiaAntes", formulario);
  }

  PostFacturasConPago99YConPPD(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/documentos/FacturasConPago99YConPPD", formulario);
  }

  PostFacturasConFormaPagoDistintaA99(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/documentos/FacturasConFormaPagoDistintaA99", formulario);
  }
}

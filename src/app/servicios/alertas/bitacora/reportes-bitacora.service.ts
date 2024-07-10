import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../../../config/api-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportesBitacoraService {

  constructor(private clientHttp:HttpClient) { }

  GetFacturasProveedoresProximasAVencerCompras(){
    return this.clientHttp.get(API_URL+"alert/FacturasProveedoresProximasAVencerCompras")
  }
/***************************************************************************************************************/
/*								Alerta de modificación de compras se basa en tabla de bicoras	                               */
/***************************************************************************************************************/
  PostModificacionesDeComprasBitacoras(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/ModificacionesDeComprasBitacoras", formulario);
  }

  PostCancelacionesDeComprasBitacora(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/CancelacionesDeComprasBitacora", formulario);
  }

/**********************************************************************************************************************************************************************************************/
/*			Un historial de cancelaciones, Pero con la alerta de quien lo realice, y la notificación de la observación de los documentos (factura, remisión, nota de venta)					  */
/*														consultar desde el edo del documento o bien la botacora																				  */
/**********************************************************************************************************************************************************************************************/
  PostCancelacionesDeFacturasRemisionNotadeventaBitacora(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/CancelacionesDeFacturasRemisionNotadeventaBitacora", formulario);
  }

/**********************************************************************************************************************************************************************************************/
/*			Historial de eliminación de documentos, datos de bitácora detallado, y notificación de alerta. Notificar si eliminaron notas, o remisiones “desde la bitácora					  */
/**********************************************************************************************************************************************************************************************/
  PostEliminacionDeDocumentosNotasRemisionesBitacora(formulario: any): Observable<any> {
    return this.clientHttp.post(API_URL + "alert/EliminacionDeDocumentosNotasRemisionesBitacora", formulario);
  }
  
}

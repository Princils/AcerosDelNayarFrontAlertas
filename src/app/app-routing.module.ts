import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuAlertasComponent } from './alertas/menu-alertas/menu-alertas.component';
import { MenuConfiguracionComponent } from './configuracion/menu-configuracion/menu-configuracion.component';
import { MenubitacoraComponent } from './alertas/bitacora/menubitacora/menubitacora.component';
import { ModificaciondecomprasbitacoraComponent } from './alertas/bitacora/modificaciondecomprasbitacora/modificaciondecomprasbitacora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CancelacionesDeComprasBitacoraComponent } from './alertas/bitacora/cancelaciones-de-compras-bitacora/cancelaciones-de-compras-bitacora.component';
import { CancelacionesdefacturaRemisionNotadeventaComponent } from './alertas/bitacora/cancelacionesdefactura-remision-notadeventa/cancelacionesdefactura-remision-notadeventa.component';
import { ComprasSinGastoSobreCompraComponent } from './alertas/documentos/compras-sin-gasto-sobre-compra/compras-sin-gasto-sobre-compra.component';
import { DocumentosComponent } from './alertas/documentos/documentos.component';
import { ComprasSinDescuentoProntoPagoComponent } from './alertas/documentos/compras-sin-descuento-pronto-pago/compras-sin-descuento-pronto-pago.component';
import { EliminacionDeDocumentosNotasRemisionesComponent } from './alertas/bitacora/eliminacion-de-documentos-notas-remisiones/eliminacion-de-documentos-notas-remisiones.component';


const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'MenuAlertas', component: MenuAlertasComponent},
  {path: 'MenuConfiguracion', component: MenuConfiguracionComponent},
  {path: 'Alertas/Bitacoras', component: MenubitacoraComponent},
  {path: 'Alertas/Documentos', component: DocumentosComponent},
  {path: 'Alertas/Documentos/comprassingastosobrecompra', component: ComprasSinGastoSobreCompraComponent},
  {path: 'Alertas/Documentos/comprassinfechaprontopago', component: ComprasSinDescuentoProntoPagoComponent},
  {path: 'Alertas/bitacoras/EliminacionDeDocumentosNotasRemisiones', component: EliminacionDeDocumentosNotasRemisionesComponent},
  {path: 'Alertas/bitacoras/Modificaciondecomprasbitacora', component: ModificaciondecomprasbitacoraComponent},
  {path: 'Alertas/bitacoras/CancelacionesDeComprasBitacora', component: CancelacionesDeComprasBitacoraComponent},
  {path: 'Alertas/bitacoras/CancelacionesdefacturaRemisionNotadeventa', component: CancelacionesdefacturaRemisionNotadeventaComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
})

export class AppRoutingModule { }

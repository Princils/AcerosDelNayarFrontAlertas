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
import { MenualmacenComponent } from './alertas/almacen/menualmacen/menualmacen.component';
import { ProductosConAlmacenamientoMinimoComponent } from './alertas/almacen/productos-con-almacenamiento-minimo/productos-con-almacenamiento-minimo.component';
import { FacturasVencidasDiaAntesComponent } from './alertas/documentos/facturas-vencidas-dia-antes/facturas-vencidas-dia-antes.component';
import { FacturasConPago99YConPPDComponent } from './alertas/documentos/facturas-con-pago99-ycon-ppd/facturas-con-pago99-ycon-ppd.component';
import { FacturasConFormaDePagoDistintaA99Component } from './alertas/documentos/facturas-con-forma-de-pago-distinta-a99/facturas-con-forma-de-pago-distinta-a99.component';


const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'MenuAlertas', component: MenuAlertasComponent},
  {path: 'MenuConfiguracion', component: MenuConfiguracionComponent},
  {path: 'Alertas/Bitacoras', component: MenubitacoraComponent},
  {path: 'Alertas/Documentos', component: DocumentosComponent},
  {path: 'Alertas/Almacen', component: MenualmacenComponent},
  {path: 'Alertas/Almacen/productosconalmacenamientominimo', component: ProductosConAlmacenamientoMinimoComponent},
  {path: 'Alertas/Documentos/comprassingastosobrecompra', component: ComprasSinGastoSobreCompraComponent},
  {path: 'Alertas/Documentos/comprassinfechaprontopago', component: ComprasSinDescuentoProntoPagoComponent},
  {path: 'Alertas/Documentos/facturasvencidasdiaantes', component: FacturasVencidasDiaAntesComponent},
  {path: 'Alertas/Documentos/facturasconpago99yconppd', component: FacturasConPago99YConPPDComponent},
  {path: 'Alertas/Documentos/facturasconformadepagodistintaa99', component: FacturasConFormaDePagoDistintaA99Component},
  

  
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

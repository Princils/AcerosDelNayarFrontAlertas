import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubitacoraComponent } from './alertas/bitacora/menubitacora/menubitacora.component';
import { ModificaciondecomprasbitacoraComponent } from './alertas/bitacora/modificaciondecomprasbitacora/modificaciondecomprasbitacora.component';
import { DocumentosComponent } from './alertas/documentos/documentos.component';
import { MenuAlertasComponent } from './alertas/menu-alertas/menu-alertas.component';
import { VistaTituloComponent } from './componentes/vista-titulo/vista-titulo.component';
import { InicioComponent } from './inicio/inicio.component';
import { AccesoRapidoComponent } from './navbars/acceso-rapido/acceso-rapido.component';
import { NabvarComponent } from './navbars/nabvar/nabvar.component';
import { MenuConfiguracionComponent } from './configuracion/menu-configuracion/menu-configuracion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { CancelacionesDeComprasBitacoraComponent } from './alertas/bitacora/cancelaciones-de-compras-bitacora/cancelaciones-de-compras-bitacora.component';
import { DataTablesModule } from 'angular-datatables';
import { CancelacionesdefacturaRemisionNotadeventaComponent } from './alertas/bitacora/cancelacionesdefactura-remision-notadeventa/cancelacionesdefactura-remision-notadeventa.component';
import { ComprasSinGastoSobreCompraComponent } from './alertas/documentos/compras-sin-gasto-sobre-compra/compras-sin-gasto-sobre-compra.component';
import { ComprasSinDescuentoProntoPagoComponent } from './alertas/documentos/compras-sin-descuento-pronto-pago/compras-sin-descuento-pronto-pago.component';
import { EliminacionDeDocumentosNotasRemisionesComponent } from './alertas/bitacora/eliminacion-de-documentos-notas-remisiones/eliminacion-de-documentos-notas-remisiones.component';
import { MenualmacenComponent } from './alertas/almacen/menualmacen/menualmacen.component';
import { ProductosConAlmacenamientoMinimoComponent } from './alertas/almacen/productos-con-almacenamiento-minimo/productos-con-almacenamiento-minimo.component';
import { FacturasVencidasDiaAntesComponent } from './alertas/documentos/facturas-vencidas-dia-antes/facturas-vencidas-dia-antes.component';
import { FacturasConPago99YConPPDComponent } from './alertas/documentos/facturas-con-pago99-ycon-ppd/facturas-con-pago99-ycon-ppd.component';
import { FacturasConFormaDePagoDistintaA99Component } from './alertas/documentos/facturas-con-forma-de-pago-distinta-a99/facturas-con-forma-de-pago-distinta-a99.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubitacoraComponent,
    ModificaciondecomprasbitacoraComponent,
    DocumentosComponent,
    MenuAlertasComponent,
    VistaTituloComponent,
    InicioComponent,
    AccesoRapidoComponent,
    NabvarComponent,
    MenuConfiguracionComponent,
    CancelacionesDeComprasBitacoraComponent,
    CancelacionesdefacturaRemisionNotadeventaComponent,
    ComprasSinGastoSobreCompraComponent,
    ComprasSinDescuentoProntoPagoComponent,
    EliminacionDeDocumentosNotasRemisionesComponent,
    MenualmacenComponent,
    ProductosConAlmacenamientoMinimoComponent,
    FacturasVencidasDiaAntesComponent,
    FacturasConPago99YConPPDComponent,
    FacturasConFormaDePagoDistintaA99Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
    DataTablesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

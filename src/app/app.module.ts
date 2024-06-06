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
    MenuConfiguracionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

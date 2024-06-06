import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MenuAlertasComponent } from './alertas/menu-alertas/menu-alertas.component';
import { MenuConfiguracionComponent } from './configuracion/menu-configuracion/menu-configuracion.component';
import { MenubitacoraComponent } from './alertas/bitacora/menubitacora/menubitacora.component';
import { ModificaciondecomprasbitacoraComponent } from './alertas/bitacora/modificaciondecomprasbitacora/modificaciondecomprasbitacora.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'MenuAlertas', component: MenuAlertasComponent},
  {path: 'MenuConfiguracion', component: MenuConfiguracionComponent},
  {path: 'Alertas/Bitacoras', component: MenubitacoraComponent},
  {path: 'Alertas/bitacoras/Modificaciondecomprasbitacora', component: ModificaciondecomprasbitacoraComponent},
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

import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportesBitacoraService } from '../../../servicios/alertas/bitacora/reportes-bitacora.service';
import { ReportesAlmacenService } from '../../../servicios/alertas/almacen/reportes-almacen.service';

@Component({
  selector: 'app-productos-con-almacenamiento-minimo',
  templateUrl: './productos-con-almacenamiento-minimo.component.html',
  styleUrl: './productos-con-almacenamiento-minimo.component.css'
})
export class ProductosConAlmacenamientoMinimoComponent {

  DataPrincipal: any;
  loading: boolean = false; // Loader state
  formularioPrincipal:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private ReportesAlmacenService:ReportesAlmacenService
  ) {
    this.formularioPrincipal = this.formulario.group({
    });


  }

ngOnInit(): void {

  }

  BuscarAlertaDinamica(): any {
    this.loading = true; // Iniciar cargador
    this.ReportesAlmacenService.ProductosConAlmacenAlMinimoAlmacen(this.formularioPrincipal.value).subscribe(
      respuesta => {
       this.DataPrincipal = respuesta;
       this.loading = false; // Detener cargador
      },
      error => {
        console.error('Error:', error);
        this.loading = false; // Detener cargador
      }
    );
  }


}

import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportesBitacoraService } from '../../../servicios/alertas/bitacora/reportes-bitacora.service';
import { ReportesDocumentosService } from '../../../servicios/alertas/documentos/reportes-documentos.service';

@Component({
  selector: 'app-compras-sin-descuento-pronto-pago',
  templateUrl: './compras-sin-descuento-pronto-pago.component.html',
  styleUrl: './compras-sin-descuento-pronto-pago.component.css'
})
export class ComprasSinDescuentoProntoPagoComponent {

  DataPrincipal: any;
  loading: boolean = false; // Loader state
  formularioPrincipal:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private ReportesDocumentosService:ReportesDocumentosService
  ) {
    this.formularioPrincipal = this.formulario.group({
      fechainicio: ['', Validators.required],
      fechafin: [{ value: '', disabled: true }, Validators.required], // Initial state disabled
    }, { validators: this.fechaValidator });


  }

ngOnInit(): void {


    this.formularioPrincipal.get('fechainicio')?.valueChanges.subscribe(fechainicio => {
      const fechafinControl = this.formularioPrincipal.get('fechafin');
      
      if (fechainicio) {
        fechafinControl?.enable();
        const fechafin = fechafinControl?.value;
        
        // If fechainicio is greater than fechafin, reset fechafin
        if (fechafin && fechainicio > fechafin) {
          fechafinControl.setValue('');
        }
      } else {
        fechafinControl?.disable();
      }
      this.formularioPrincipal.updateValueAndValidity(); // Update form validity
    });

    this.formularioPrincipal.get('fechafin')?.valueChanges.subscribe(() => {
      this.formularioPrincipal.updateValueAndValidity(); // Update form validity
    });
  }

  /**
   * Función BuscarAlertaDinamica.
   * Esta función se encarga de buscar alertas dinámicas.
   * Inicia el cargador, realiza una solicitud POST al servicio ReportesBitacoraService,
   * y maneja la respuesta y el error en consecuencia.
   * @returns {any} La respuesta de la llamada a la API.
   */
  BuscarAlertaDinamica(): any {
    this.loading = true; // Iniciar cargador
    this.ReportesDocumentosService.PostComprasSinFechaDescuentoProntoPagoDocumentos(this.formularioPrincipal.value).subscribe(
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


  /**
   * Valida las fechas de inicio y fin en un formulario.
   * Si la fecha de inicio es mayor que la fecha de fin, se devuelve un objeto con la propiedad "fechaInvalida" establecida en true.
   * En caso contrario, se devuelve null.
   * 
   * @param form El formulario que contiene las fechas de inicio y fin.
   * @returns Un objeto con la propiedad "fechaInvalida" establecida en true si la fecha de inicio es mayor que la fecha de fin, o null en caso contrario.
   */
  fechaValidator(form: FormGroup) {
    const fechainicio = form.get('fechainicio')?.value;
    const fechafin = form.get('fechafin')?.value;
    if (fechainicio && fechafin && fechainicio > fechafin) {
      return { fechaInvalida: true };
    }
    return null;
  }

}

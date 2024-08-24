import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReportesBitacoraService } from '../../../servicios/alertas/bitacora/reportes-bitacora.service';
import { ReportesDocumentosService } from '../../../servicios/alertas/documentos/reportes-documentos.service';

@Component({
  selector: 'app-facturas-con-pago99-ycon-ppd',
  templateUrl: './facturas-con-pago99-ycon-ppd.component.html',
  styleUrl: './facturas-con-pago99-ycon-ppd.component.css'
})
export class FacturasConPago99YConPPDComponent {

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

  BuscarAlertaDinamica(): any {
    this.loading = true; // Iniciar cargador
    this.ReportesDocumentosService.PostFacturasConPago99YConPPD(this.formularioPrincipal.value).subscribe(
      respuesta => {
        this.DataPrincipal = respuesta;
        this.DataPrincipal.message = this.DataPrincipal.message.map((data: any) => ({
          ...data,
          Total: parseFloat(data.Total),
          Pendiente: parseFloat(data.Pendiente)
        }));
        this.loading = false; // Detener cargador
      },
      error => {
        console.error('Error:', error);
        this.loading = false; // Detener cargador
      }
    );
  }




  fechaValidator(form: FormGroup) {
    const fechainicio = form.get('fechainicio')?.value;
    const fechafin = form.get('fechafin')?.value;
    if (fechainicio && fechafin && fechainicio > fechafin) {
      return { fechaInvalida: true };
    }
    return null;
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#parametros').DataTable({
        language: {
          "decimal": "",
          "emptyTable": "No hay información",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          "infoEmpty": "Mostrando 0 a 0 de 0 Entradas",
          "infoFiltered": "(Filtrado de _MAX_ total entradas)",
          "infoPostFix": "",
          "thousands": ",",
          "lengthMenu": "Mostrar _MENU_ Entradas",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "Buscar:",
          "zeroRecords": "Sin resultados encontrados",
          "paginate": {
              "first": "Primero",
              "last": "Ultimo",
              "next": "Siguiente",
              "previous": "Anterior"
          }
      },
      });
      $('#dataTable').DataTable({
        language: {
          "decimal": "",
          "emptyTable": "No hay información",
          "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
          "infoEmpty": "Mostrando 0 a 0 de 0 Entradas",
          "infoFiltered": "(Filtrado de _MAX_ total entradas)",
          "infoPostFix": "",
          "thousands": ",",
          "lengthMenu": "Mostrar _MENU_ Entradas",
          "loadingRecords": "Cargando...",
          "processing": "Procesando...",
          "search": "Buscar:",
          "zeroRecords": "Sin resultados encontrados",
          "paginate": {
              "first": "Primero",
              "last": "Ultimo",
              "next": "Siguiente",
              "previous": "Anterior"
          }
      },
      });
    });
  }

}

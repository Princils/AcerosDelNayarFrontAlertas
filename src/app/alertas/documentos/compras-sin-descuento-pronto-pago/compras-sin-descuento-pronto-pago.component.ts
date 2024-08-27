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

    // Destruir la instancia actual de DataTables si existe
    if ($.fn.DataTable.isDataTable('#dataTable')) {
        $('#dataTable').DataTable().destroy();
    }
    this.ReportesDocumentosService.PostComprasSinFechaDescuentoProntoPagoDocumentos(this.formularioPrincipal.value).subscribe(
      respuesta => {
       this.DataPrincipal = respuesta;
       this.loading = false; // Detener cargador
  
       // Reinicializar DataTables después de que los datos han sido actualizados
       setTimeout(() => {
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
       }, 0); // Se usa timeout para asegurar que la tabla se ha renderizado antes de aplicar DataTables
     },
     error => {
       console.error('Error:', error);
       //dejamos el arreglo vacio para que no muestre datos en la tabla
       this.DataPrincipal = [];
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

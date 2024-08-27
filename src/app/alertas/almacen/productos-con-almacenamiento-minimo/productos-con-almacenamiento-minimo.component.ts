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

    // Destruir la instancia actual de DataTables si existe
    if ($.fn.DataTable.isDataTable('#dataTable')) {
        $('#dataTable').DataTable().destroy();
    }
    this.ReportesAlmacenService.ProductosConAlmacenAlMinimoAlmacen(this.formularioPrincipal.value).subscribe(
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

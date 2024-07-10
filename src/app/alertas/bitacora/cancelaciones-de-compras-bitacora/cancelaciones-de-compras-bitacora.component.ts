import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportesBitacoraService } from '../../../servicios/alertas/bitacora/reportes-bitacora.service';

@Component({
  selector: 'app-cancelaciones-de-compras-bitacora',
  templateUrl: './cancelaciones-de-compras-bitacora.component.html',
  styleUrl: './cancelaciones-de-compras-bitacora.component.css'
})
export class CancelacionesDeComprasBitacoraComponent implements OnInit{

  DataPrincipal: any;
  loading: boolean = false; // Loader state
  formularioPrincipal:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private ReportesBitacoraService:ReportesBitacoraService
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
    this.loading = true; // Start loader
    this.ReportesBitacoraService.PostCancelacionesDeComprasBitacora(this.formularioPrincipal.value).subscribe(
      respuesta => {
       this.DataPrincipal = respuesta;
       this.loading = false; // Stop loader
      },
      error => {
        console.error('Error:', error);
        this.loading = false; // Stop loader
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
}

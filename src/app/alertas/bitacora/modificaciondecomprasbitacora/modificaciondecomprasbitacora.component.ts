import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ModificaciondecomprasbitacoraComponentService } from '../../../servicios/alertas/bitacora/modificaciondecomprasbitacora-component.service';

@Component({
  selector: 'app-modificaciondecomprasbitacora',
  templateUrl: './modificaciondecomprasbitacora.component.html',
  styleUrl: './modificaciondecomprasbitacora.component.css'
})
export class ModificaciondecomprasbitacoraComponent implements OnInit{

  formularioPrincipal:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private ModificaciondecomprasbitacoraComponentService:ModificaciondecomprasbitacoraComponentService
  ) {
    this.formularioPrincipal = this.formulario.group({
      fechainicio:[''],
      fechafin:[''],
    });
  }

  ngOnInit(): void {
    this.ModificaciondecomprasbitacoraComponentService.GetFacturasProveedoresProximasAVencerCompras().subscribe(respuesta=>{
       console.log(respuesta)}
    );
  }

  BuscarAlertaDinamica(): any {
    console.log(this.formularioPrincipal.value);
    this.ModificaciondecomprasbitacoraComponentService.PostModificacionesDeComprasBitacoras(this.formularioPrincipal.value).subscribe(
      respuesta => {
        console.log('Response:', respuesta);
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}

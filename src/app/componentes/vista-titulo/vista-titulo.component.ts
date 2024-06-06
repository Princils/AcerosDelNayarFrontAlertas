import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vista-titulo',
  templateUrl: './vista-titulo.component.html',
  styleUrl: './vista-titulo.component.css'
})
export class VistaTituloComponent {
  @Input()  titulo = "";

}

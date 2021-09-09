import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Entidades/persona';
import { ApiService } from 'src/app/helpers/api.service';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent implements OnInit {

  constructor( public  ms: MensajeService,api: ApiService ) {

    api.traerConGet().subscribe(res => this.personas = <Array<any>>res  )
  }

  personas!: Array<any>;

  ngOnInit(): void {

    
  }

  verEnAlert(text:string){
    alert(text);
  }

}

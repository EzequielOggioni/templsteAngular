import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/entidades/persona';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombres:Array<Persona>;
  modificar:number | undefined;

  constructor() {
    this.nombres=[{id:5, nombre:"Ana", apellido:"gomez", dni:123456 },
    { id:2, nombre:"Juan"  , apellido:"diaz", dni:32123 },
    { id:3, nombre:"Matias", apellido:"gonzalez", dni:45646 },
    { id:1, nombre:"Laura" , apellido:"perez", dni:88946 } ];

    this.modificar =-1;
  }
  ngOnInit(): void {
  }
  noModifica(){
    this.modificar = -1 ;
  }

  modifica(idAModificar:number| undefined){
    this.modificar = idAModificar ;
  }
  
consola(){
  console.info(this.nombres);
}

}

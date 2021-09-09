import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Entidades/persona';
import { MensajeService } from 'src/app/helpers/mensaje.service';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent implements OnInit {
  listaDePersonas: Array<Persona>;
  claseDNI: string = 'rojo';
  tipoControl: string = 'number';
  numero:string;
  constructor(private servicioMensajes: MensajeService, ruteo: ActivatedRoute) {


    this.numero = ruteo.snapshot.paramMap.get("numero")??'-58';
    this.listaDePersonas = [{ nombre: "Maxima", apellido: 'Dominguez', dni: 35886463 },
    { nombre: "juan", apellido: 'Dominguez', dni: 35886983 },
    { nombre: "Florencia", apellido: 'Dominguez', dni: 35885563 },
    { nombre: "Rita", apellido: 'Dominguez', dni: 34886463 }];
  }

  ngOnInit(): void {
  }

  mostrar() {

    alert(this.listaDePersonas[0].nombre + ' ' + this.listaDePersonas[0].apellido + ' ' + this.listaDePersonas[0].dni);
    this.listaDePersonas[0] = { nombre: "Maxima", apellido: 'Dominguez', dni: 35886463 };
    this.servicioMensajes.MiMensaje = (this.listaDePersonas[0].dni??0).toString();
  }

}

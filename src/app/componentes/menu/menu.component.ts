import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logueado:boolean;
  constructor() { 
    this.logueado = localStorage.getItem("usuario") == "admin";

  }

  ngOnInit(): void {
  }
  salir(){
    localStorage.removeItem('usuario');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private clienteHttp: HttpClient ) { }


  traerConGet(){
   return  this.clienteHttp.get('http://localhost/provincias/Backend/');
  }

  
  traerConPost(){
    let a = new FormData()
    return  this.clienteHttp.post('http://localhost/provincias/Backend/',a);
   }

}

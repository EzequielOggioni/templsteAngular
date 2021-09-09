import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario:string;
  constructor(private router:Router) {
    this.usuario = '';
    if(localStorage.getItem("usuario") == "admin")
      this.router.navigate(["/primer",45]);
      
    }
   

  ngOnInit(): void {
  }
  entrar(){
    
    localStorage.setItem("usuario",this.usuario);
    if(this.usuario == 'admin')
      this.router.navigate(["/primer"]);

  }

}

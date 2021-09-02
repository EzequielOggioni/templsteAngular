import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjercicioComponent } from './componentes/ejercicio/ejercicio.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { ValidadorGuard } from './helpers/validador.guard';

const routes: Routes = [
{path:'formulario', component: FormularioComponent, canActivate: [ValidadorGuard],
  children: [{path:"ejercicio", component:EjercicioComponent}   ]
},
{path:'form', redirectTo:"/formulario/ejercicio" },
{path:'ejercicio', component: EjercicioComponent, canActivate: [ValidadorGuard]},
{path:'', component: LoginComponent},
{path:'**', component:NoEncontradoComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from './componentes/general/general.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradaComponent } from './componentes/no-encontrada/no-encontrada.component';
import { PrimerComponenteComponent } from './componentes/primer-componente/primer-componente.component';
import { SegundoComponenteComponent } from './componentes/segundo-componente/segundo-componente.component';
import { CustodiaGuard } from './helpers/custodia.guard';

const routes: Routes =  [{
    path: 'primer', component: PrimerComponenteComponent, canActivate: [CustodiaGuard],
    children: [{ path: 'segundo', component: SegundoComponenteComponent }]
  },
  { path: 'primer/:numero', component: PrimerComponenteComponent, canActivate: [CustodiaGuard]},
  { path: 'segundo', component: SegundoComponenteComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

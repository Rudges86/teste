import { ListaEletronicosComponent } from './lista-eletronicos/lista-eletronicos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EletronicDetalhesComponent } from './lista-eletronicos/eletronic-detalhes/eletronic-detalhes.component';


const routes: Routes = [
  {path:'', component:ListaEletronicosComponent},
  {path:':index', component:EletronicDetalhesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EletronicosRoutingModule { }

import { MaterialModule } from './../material/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EletronicosRoutingModule } from './eletronicos-routing.module';
import { ListaEletronicosComponent } from './lista-eletronicos/lista-eletronicos.component';
import { EletronicDetalhesComponent } from './lista-eletronicos/eletronic-detalhes/eletronic-detalhes.component';


@NgModule({
  declarations: [ListaEletronicosComponent, EletronicDetalhesComponent],
  imports: [
    CommonModule,
    EletronicosRoutingModule,
    MaterialModule
  ]
})
export class EletronicosModule { }

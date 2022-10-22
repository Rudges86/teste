import { AutoresComponent } from './componentes/book/autores/autores.component';

import { DvdFormComponent } from './dvds/dvd-form/dvd-form.component';

import { BookComponent } from './componentes/book/book.component';
import { DvdsComponent } from './componentes/dvds/dvds.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { DetailsComponent } from './componentes/dvds/details/details.component';
import { LivrodetailsComponent } from './componentes/book/livrodetails/livrodetails.component';


const appRoutes: Routes = [
  { path: "dvds", component: DvdsComponent },
  {
    path: "livros", component: BookComponent,
    children: [
      {
        path: ":index", component: LivrodetailsComponent,
        children: [
          { path: "autores", component: AutoresComponent}
        ]
      }]
  },
  {path:'eletronics', loadChildren:'./eletronicos/eletronicos.module#EletronicosModule'},
  { path: "dvds/new", component: DvdFormComponent },
  { path: "dvds/:index", component: DetailsComponent },
  { path: "", pathMatch: 'full', redirectTo: 'dvds' },
  { path: "**", component: NotfoundComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

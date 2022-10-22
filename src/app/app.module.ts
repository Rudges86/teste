import { MaterialModule } from './material/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DvdsComponent } from './componentes/dvds/dvds.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';
import { BookComponent } from './componentes/book/book.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './componentes/dvds/details/details.component';
import { DvdFormComponent } from './dvds/dvd-form/dvd-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LivrodetailsComponent } from './componentes/book/livrodetails/livrodetails.component';
import { AutoresComponent } from './componentes/book/autores/autores.component';
import { EletronicosModule } from './eletronicos/eletronicos.module';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdsComponent,
    NotfoundComponent,
    DetailsComponent,
    DvdFormComponent,
    LivrodetailsComponent,
    AutoresComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

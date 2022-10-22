import { EletronicService } from './../../service/eletronic.service';
import { Component, OnInit } from '@angular/core';
import { Eletronic } from 'src/app/models/eletronic';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-eletronicos',
  templateUrl: './lista-eletronicos.component.html',
  styleUrls: ['./lista-eletronicos.component.css']
})
export class ListaEletronicosComponent implements OnInit {
  eletronic$:Observable<Eletronic[]>;

  constructor(private eletronicService:EletronicService) { }

  ngOnInit() {
    this.eletronic$ = this.eletronicService.eletronic$;
  }

}

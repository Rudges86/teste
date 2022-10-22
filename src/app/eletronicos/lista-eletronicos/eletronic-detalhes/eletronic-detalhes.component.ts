import { Observable } from 'rxjs';
import { EletronicService } from './../../../service/eletronic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Eletronic } from 'src/app/models/eletronic';

@Component({
  selector: 'app-eletronic-detalhes',
  templateUrl: './eletronic-detalhes.component.html',
  styleUrls: ['./eletronic-detalhes.component.css']
})
export class EletronicDetalhesComponent implements OnInit {

  eletronic$:Observable<Eletronic>

  constructor(
    private eletronicService: EletronicService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    let i:number = +this.route.snapshot.paramMap.get('index');
    this.eletronic$ = this.eletronicService.get(i)
  }

  back(){
    this.router.navigate(['..', {relativeTo: this.route}]) //volta para a rota anterior
  }

}

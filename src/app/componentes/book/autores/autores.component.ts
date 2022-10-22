import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  autores$: Observable<string[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
   this.autores$ = this.route.paramMap.pipe(
    map((params:ParamMap)=> params.get('autores').split(','))
   )
   
   //subscribe((param:ParamMap)=> console.log(param.get('autores').split(',')))
  }

}

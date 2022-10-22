import { Livros } from './../../../models/livros';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LivrosService } from './../../../service/livros.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';


@Component({
  selector: 'app-livrodetails',
  templateUrl: './livrodetails.component.html',
  styleUrls: ['./livrodetails.component.css']
})
export class LivrodetailsComponent implements OnInit {

livro$:Observable<Livros> = null;
index: number;
autores: string[];
  constructor(
    private livroservico:LivrosService,
    private route: ActivatedRoute,
    private router: Router
    
    ) { }

  ngOnInit() {
    this.livro$ = this.route.paramMap.pipe(
      tap((param:ParamMap)=> this.index = +param.get('index')),
      switchMap((params: ParamMap)=> this.livroservico.get(+params.get('index'))), //conecta um observable no outro
      tap((b)=> this.autores = (b) ?  b.autores : [])
    )

  }

remove(){
  this.livroservico.remove(this.index)
  this.router.navigateByUrl("livros")
  //this.router.navigate(['livros'])
}

goAutores(){
  let url = '/livros/' + this.index + '/autores'
  this.router.navigate([url, {autores: this.autores}])
}

}

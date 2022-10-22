import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Livros } from '../models/livros';
import {delay, map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  livros = []

  livrosSubjects: BehaviorSubject<Livros[]> = new BehaviorSubject<Livros[]>([])
  public livros$ = this.livrosSubjects.asObservable()
  constructor() {
    timer(2000)
      .subscribe(() =>
        this.livrosSubjects.next([
          { title: "Livro 1", paginas: 200, autores: ["John", "Nicole"] },
          { title: "Livro 2", paginas: 100, autores: ["Mily"] },
          { title: "Livro 3", paginas: 300, autores: ["Maria", "Carlos"] },
          { title: "Livro 4", paginas: 230, autores: ["João", "Naira"] },
          { title: "Livro 5", paginas: 130, autores: ["Paulo", "Ivi"] },
        ])
      )
  }

  add(b: Livros) {
    this.livrosSubjects.getValue().push(b)

  }

  remove(i: number) {
    let livros = this.livrosSubjects.getValue();
    if (i >= 0 && i < livros.length) {
      livros.splice(i, 1);
    }

  }

  get(i: number): Observable<Livros> {
    return this.livros$.pipe(
      map(livros => (i >= 0 && i < livros.length ? livros[i] : null)),
      delay(1000)  
    )
  }
}




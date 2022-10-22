import { Observable } from 'rxjs';
import { LivrosService } from './../../service/livros.service';
import { Component, OnInit } from '@angular/core';
import { Livros } from 'src/app/models/livros';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  livros:Observable<Livros[]>;

  constructor(private livroservice: LivrosService) { }

  ngOnInit() {
    this.livros = this.livroservice.livros$;
  }

}

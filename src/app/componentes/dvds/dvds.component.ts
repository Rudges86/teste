import { Router } from '@angular/router';
import { DvdsService } from './../../service/dvds.service';
import { Component, OnInit } from '@angular/core';
import { Dvds } from 'src/app/models/dvds';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvds',
  templateUrl: './dvds.component.html',
  styleUrls: ['./dvds.component.css']
})
export class DvdsComponent implements OnInit {
  dvds$:Observable<Dvds[]>;
  constructor(private dvdservice:DvdsService, private router: Router) { }

  ngOnInit() {
    this.dvds$ = this.dvdservice.dvds$
  }

  goDetalhes(i:number, dvd:Dvds){
    this.router.navigate([`/dvds/${i}`, {title: dvd.title}])
  }

  remove(i:number){
    this.dvdservice.remove(i)
  }
}

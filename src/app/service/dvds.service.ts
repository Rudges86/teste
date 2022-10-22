import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Injectable } from '@angular/core';
import { Dvds } from '../models/dvds';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdsService {


  dvdSubject: BehaviorSubject<Dvds[]> = new BehaviorSubject<Dvds[]>([]);
  dvds$ = this.dvdSubject.asObservable();
  constructor() {
    timer(2000)
      .subscribe(() => {
        this.dvdSubject.next([
          { title: "Disco 1", ano: 200, genero: "Music" },
          { title: "Disco 2", ano: 100, genero: "Movier" },

        ])
      })
  }


  add(d: Dvds) {
    this.dvdSubject.getValue().push(d)
  }

  remove(i: number) {
    let dvd = this.dvdSubject.getValue();
    if (i >= 0 && dvd.length) {
      dvd.splice(i, 1)
    }
  }

  get(i: number): Observable<Dvds> {
    return this.dvds$.pipe(
      map(dvds => (i >= 0 && dvds.length) ? dvds[i] : null,
        delay(15000)
      )
    )
  }
}

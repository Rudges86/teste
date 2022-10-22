import { Eletronic } from './../models/eletronic';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EletronicService {
 eletronicsSubject: BehaviorSubject<Eletronic[]> = new BehaviorSubject<Eletronic[]>([])
 eletronic$ = this.eletronicsSubject.asObservable();

  constructor() {
    timer(1000)
    .subscribe(
      ()=>{
        this.eletronicsSubject.next([
          {nome:"Ssd", marca:"Samsung", preco:200, descricao:"240 gb ssd"},
          {nome:"Headphone", marca:"C3Tech", preco:100, descricao:"Fone sem fio"},
        ])
      }
      )

   /* timer(1000).subscribe(()=>{
      this.eletronicosSubject.next([
        {nome:"Ssd", marca:"Samsung", preco:200, descricao:"240 gb ssd"},
        {nome:"Headphone", marca:"C3Tech", preco:100, descricao:"Fone sem fio"},
      ])
    })
*/}

   get(i:number):Observable<Eletronic>{
    return this.eletronic$.pipe(
      map(eletronic => (i >= 0 && i < eletronic.length) ? eletronic[i] : null),
      delay(1000),
    )
   }
}

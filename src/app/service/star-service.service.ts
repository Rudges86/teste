import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StarServiceService {
 url:string = 'https://swapi.dev/api/people'
  constructor(private http:HttpClient) { }

  buscaCard(id:number):Observable<any>{
    return this.http.get<any>(`${this.url}/${id}`)
  }
}

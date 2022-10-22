import { Dvds } from './../../../models/dvds';
import { DvdsService } from './../../../service/dvds.service';
import { ActivatedRoute, ParamMap, Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dvd$: Observable<Dvds>;
  title = null;


  constructor(private route: ActivatedRoute,
    private dvservice: DvdsService, private router: Router) { }

  ngOnInit() {
    timer(1000).subscribe(() => {
      let index: number = +this.route.snapshot.paramMap.get('index');
      this.dvd$ = this.dvservice.get(index)
      this.route.paramMap.subscribe(
        (params: ParamMap) => {
          if (params.has('title')) {
            this.title = params.get('title');
          }
        }

      )
    })


    /*    this.route.paramMap
        .subscribe(
          (param: ParamMap) =>{
            console.log("index: ", param.get('index'))
          }
        )
    */
  }

  goBack() {
    this.router.navigate(['/dvds'])
  }

}

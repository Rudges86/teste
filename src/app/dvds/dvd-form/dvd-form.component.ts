import { DvdsService } from './../../service/dvds.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.css']
})
export class DvdFormComponent implements OnInit {
  formDvd = this.fb.group({
    'title': ['',],
    'ano': [''],
    'genero': ['']
  })
  
  
  constructor(private fb:FormBuilder, private dvdService:DvdsService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.dvdService.add(this.formDvd.value);
    this.router.navigate(['/dvds'])
  }

  goBack(){
    this.router.navigate(['/dvds'])
  }
}

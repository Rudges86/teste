import { DialogComponent } from './../../dialog/dialog/dialog.component';
import {MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { StarServiceService } from './../../service/star-service.service';
import { Component, OnInit } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  dados:any [] = []
  mode:ProgressSpinnerMode = "determinate"

  constructor(private starService: StarServiceService, public dialog:MatDialog) { }

  ngOnInit(): void {    
  }

  puxa(id:number){
    this.starService.buscaCard(id).subscribe({
      next:(x)  => this.dados = x ,
      error: (error) => console.log(error)
    })
    this.mode ='indeterminate'
    const dialogRef = this.dialog.open(DialogComponent,{
      width:'250px',
      data:{mode:this.mode}
    });
    setTimeout(()=> {
      console.log(this.dados)
      this.mode ='determinate'
      dialogRef.close();  
    }, 3000)
    
  }
 
  
}

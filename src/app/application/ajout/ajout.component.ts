import { Component, OnInit } from '@angular/core';
import { Facture } from '../entities/facture.entity';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css'],
  providers:[CrudService]
})
export class AjoutComponent implements OnInit {
  facture: Facture = new Facture()
  constructor(private crud:CrudService,private route:Router) { }

  ngOnInit() {
  }

  save(){
    this.crud.createNew(this.facture).subscribe(res=>{
      console.log(res);
      this.route.navigate(['/']);
    })
    // this.http.post('http://localhost:3000/factures',this.facture).subscribe(res=>{
    //   console.log(res);
    //   this.route.navigate(['/']);
    // })
  }

}

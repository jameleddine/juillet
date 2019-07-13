import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Facture } from '../entities/facture.entity';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [CrudService]
})
export class DashboardComponent implements OnInit {
  // responses:any = []
  facture: Facture
  constructor(private crud: CrudService, private route: Router) { }

  ngOnInit() {
    this.getAll()
    // this.http.get("http://localhost:3000/factures").subscribe(res=>{
    //   this.facture = <Facture>res;
    // })
  }

  getAll() {
    this.crud.getAll().subscribe(res => {
      this.facture = <Facture>res;
    })
  }

  delete(z) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
        this.crud.deleteById(z._id).subscribe(res=>{
          this.getAll()
        })
     
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  edit(h) {
    this.route.navigate(['gestion', h._id])
  }

}

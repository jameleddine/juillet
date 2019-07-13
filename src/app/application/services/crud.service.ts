import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = "http://localhost:3000/"

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get(apiUrl+'factures');
  }
  createNew(data){
    return this.http.post(apiUrl+'factures',data);
  }
  getById(id){
    return this.http.get(apiUrl+'facture/'+id)
  }
  updateById(data,id){
    return this.http.put(apiUrl+'facture/'+id,data);
  }
  deleteById(id){
    return this.http.delete(apiUrl+'facture/'+id);
  }

}

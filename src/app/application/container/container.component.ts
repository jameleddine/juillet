import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  test : string = "hello";
  count : number = 0;
  name:string;
  email:string;
  phone:string;
  about:string;
  users:any = [];
  HEROES = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
 ];
 
  constructor() {
    console.log('constructor()')
   }

  ngOnInit() {
    console.log('ngOnInit()')
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit()')

  }

  callfnct(){
    console.log(this.test);
  }
  increment(){
    this.count ++;
  }
  decrement(){
    this.count --;
  }

  save(){
    let data = {
      "name":this.name,
      "email":this.email,
      "phone":this.phone,
      "about":this.about
    }
    this.users.push(data);
    console.log(data);
  }
}

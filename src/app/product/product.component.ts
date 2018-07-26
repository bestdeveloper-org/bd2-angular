import { Component, OnInit } from '@angular/core';
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  state:any={
    product:[],
    name:"",
    error:"",
    srv: null
  };

  async ngOnInit() {

    this.state.product.push({id:1, name:'Varza'});
    this.state.product.push({id:2, name:'Televizor'});

     this.state.srv = await this.httpService.getJson('');

  }
   add () {
   // const exist=this.state.product.find(el=>el.name==this.state.name);
   // this.state.error=exist;
   // if (this.state.error>=0){
   //     setTimeout(function(){ alert("Produsul exista"); }, 3000);
   // }
   //else{
     var exist=false;
     for (var i=0; i<this.state.product.length; i++){
       if (this.state.product==this.state.name){
         exist=true;
       }
     }
     if (exist==true){
      setTimeout(function(){ alert("Produsul exista"); }, 3000);
     }
     else  {
    this.state.product.push({id:this.state.product.length+1, name:this.state.name});
    this.state.name="";
     }
   }
  }

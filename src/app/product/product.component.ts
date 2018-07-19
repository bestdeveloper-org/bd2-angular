import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  state:any={
    product:[],
    name:"",
    error:""
  };

  ngOnInit() {
  
    this.state.product.push({id:1, name:'Varza'});
    this.state.product.push({id:2, name:'Televizor'});
  }
   add () {
    const exist=this.state.product.find(el=>el.name==this.state.name);
    this.state.error=exist;
    this.state.product.push({id:this.state.product.length+1, name:this.state.name});
    this.state.name="";
   }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  product:string ="";
  price:number =0;
  rateing:number= 0;
  delivery:boolean =true;

  stores:any = [
    {product:'pen', price:10, rateing:3,delivery:true},
    {product:'phone', price:100, rateing:2,delivery:true},
    {product:'shirt', price:400, rateing:4,delivery:false},
    {product:'cap', price:200, rateing:5,delivery:false},
    {product:'mobile case', price:300, rateing:2,delivery:true},
    {product:'remote', price:25, rateing:2.5,delivery:true},
  ]

  delete(i:number){
    this.stores.splice(i,1)

  }
  add(){
    let store = {
      product:this.product,
      price:this.price,
      rateing:this.rateing,
      delivery:this.delivery
    }
    this.stores.unshift(store)
  }
  pricehl(){
    this.stores.sort((a:any,b:any) => a.price - b.price)
  }
  pricelh(){
    this.stores.sort((a:any,b:any) => b.price - a.price)
  }
  rateinghl(){
    this.stores.sort((a:any,b:any) => b.rateing - a.rateing)

}
rateinglh(){
  this.stores.sort((a:any,b:any) => a.rateing - b.rateing)

}
total(){
  let totalPrice = this.stores.reduce((sum:any,store:any) => sum + store.price,0);
  alert(totalPrice);
}
discount(){
  this.stores =this.stores.map((store:any)=>{
    store.price = store.price * 0.5;
    return store;
  })
}
deliverycharges(){
  this.stores =this.stores.map((store:any)=>{
    store.price = store.price +20 ;
    return store;
})
}
freedelivery(){
  this.stores = this.stores.filter((store:any) => store.delivery == true);
}

term:string="";

search(){
  
    this.stores = this.stores.filter((store:any) => store.product.includes(this.term));

  }
  items(){
    let item = this.stores.length;
    alert(item);
  }
}

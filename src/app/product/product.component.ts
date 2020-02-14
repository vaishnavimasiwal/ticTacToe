import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId:String="P1001";
  productName:String="IPhone";
  productPrice:Number=50000;
  constructor() { }

  ngOnInit(): void {
  }

}

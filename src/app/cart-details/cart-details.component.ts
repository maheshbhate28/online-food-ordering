import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.scss']
})
export class CartDetailsComponent implements OnInit {
  data: any;
  cartItemNo: any;
  totalPrice = 0;
  constructor(private router: Router) {
    this.getCartCount();
  }

  ngOnInit() {
    this.data = [];
    const table = localStorage.getItem('mycart');
    this.data = JSON.parse(table);
    // this.data.forEach(element => {
    //   element.calcprice = element.price * element.quantity;
    // });
    this.calculatePrice();
  }

  private calculatePrice() {
    this.totalPrice = 0;
    this.data.forEach(element => {
      this.totalPrice = this.totalPrice + (element.price * element.quantity);
    });
    this.totalPrice = this.totalPrice + 10;
  }

  private getCartCount() {
    const item = localStorage.getItem('mycart');
    if (item) {
      this.cartItemNo = JSON.parse(item).length;
    }
  }

  private deleteRow(index) {
    const itemName = this.data[index].name;
    this.data.splice(index, 1);
    localStorage.removeItem('mycart');
    localStorage.setItem('mycart', JSON.stringify(this.data));
    localStorage.removeItem(itemName);
    this.getCartCount();
    this.calculatePrice();
  }

  private incCount(item) {
    item.quantity = item.quantity + 1;
    this.calculatePrice();
  }

  private decCount(item, index) {
    if (item.quantity === 1) {
      this.deleteRow(index);
      this.calculatePrice();
      return;
    } else {
      item.quantity = item.quantity - 1;
      this.calculatePrice();
    }
  }

  private placeOrder() {
    if (this.data.length > 0) {
      this.router.navigate(['orderplaced']);
    } else {
      alert('No items are present in cart.');
    }
  }

}

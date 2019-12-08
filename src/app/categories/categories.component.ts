import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  item: string;
  data: any;
  itemsArray: any[] = [];
  cartList: any[] = [];
  cartItemNo: any;
  constructor(private service: HomeService) {
    this.item = sessionStorage.getItem('itemCategory');
    this.getCartCount();
  }

  ngOnInit() {
    this.service.getCategories().subscribe(data => {
      this.itemsArray = [];
      this.data = data;
      this.data.forEach(element => {
        if (element.categoryName === this.item) {
          debugger;
          element.items.forEach(item => {
            if (localStorage.getItem(item.name)) {
              item.quantity = JSON.parse(localStorage.getItem(item.name));
            }
            this.itemsArray.push(item);
          });
        }
      });
    });
  }

  private incCount(item) {
    item.quantity = item.quantity + 1;
  }

  private decCount(item) {
    item.quantity = item.quantity - 1;
  }

  private addtoCart(item) {
    // this.cartList.push(item);
    item.quantity = item.quantity + 1;
    localStorage.setItem(item.name, item.quantity)
    let itemList: any = localStorage.getItem('mycart');
    debugger;
    if (itemList) {
      itemList = JSON.parse(itemList);
      itemList.forEach(element => {
        if(element.name === item.name) {
          itemList.pop(element);
        }
      });
      itemList.push(item);
      itemList = JSON.stringify(itemList);
      localStorage.setItem('mycart', itemList);
    } else {
      this.cartList.push(item);
      localStorage.setItem('mycart', JSON.stringify(this.cartList));
    }
    this.getCartCount();

  }

  private getCartCount() {
    const item = localStorage.getItem('mycart');
    if (item) {
      this.cartItemNo = JSON.parse(item).length;
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  @Input('cartItemNo') cartItemNo: any;
  constructor(private router: Router) {
    const userData = localStorage.getItem('authToken');
    this.user = JSON.parse(userData).firstname;
    this.getCartCount();
   }

  ngOnInit() {
  }

  private getCartCount() {
    const item = localStorage.getItem('mycart');
    if (item) {
      this.cartItemNo = JSON.parse(item).length;
    }
  }

  private cartDetails() {
    this.router.navigate(['details']);
  }

  private gotoHome() {
    this.router.navigate(['home']);
  }

}

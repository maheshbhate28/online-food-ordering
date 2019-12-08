import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.scss']
})
export class OrderPlacedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  private logout() {
    localStorage.clear();
    this.router.navigate(['home']);
  }

}

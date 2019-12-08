import { Component, OnInit } from '@angular/core';
import { HomeService } from '../service/home.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  data: any;
  user: any;

  constructor(private service: HomeService, private router: Router) {
   }

  ngOnInit() {
    this.service.getCategories().subscribe(data => {
      this.data = data;
    });
  }

  private itemDetails(itemName: string) {
    sessionStorage.setItem('itemCategory', itemName);
    this.router.navigate(['category']);
  }

}

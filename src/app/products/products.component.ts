import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  token: string = localStorage.getItem('token');
  products: any = [];

  constructor(public service: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this.service.getProducts().subscribe((data: {}) => {
      console.log(data);
      this.products = data;
    });
  }

  delete(id) {
    this.service.deleteProduct(id)
      .subscribe(res => {
        this.getProducts();
      }, (err) => {
        console.log(err);
      }
      );
  }

  
}
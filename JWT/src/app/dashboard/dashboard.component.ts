import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  infoDetails: any;
  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
  }
info() {
    const token = localStorage.getItem('authorization');
    const headers = new HttpHeaders().set('authorization', token);
    this.http.get('http://localhost:1234/api/getDetails', {headers} ).subscribe( data => {
    this.infoDetails = data['user'];
    console.log(data);
  });
}
}

/*
books: any;
displayedColumns = ['Customer_Name', 'Customer_LastName', 'Customer_id' ,'Customer_Email','Customer_Age','Customer_Gender','Customer_ZipCode','Customer_Address'];
dataSource = new BookDataSource(this.api);

constructor(private api: ApiService) {
}

ngOnInit() {
  this.api.getBooks()
    .subscribe(res => {
      console.log(res);
      this.books = res;
    }, err => {
      console.log(err);
    });
}*/


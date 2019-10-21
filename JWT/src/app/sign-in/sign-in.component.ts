import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  LoginName: any;
  LoginPassword: any;
  ngOnInit() {
  }
  constructor(private http: HttpClient, private router: Router) { }
  SignIn() {

    const user = {
      LoginName : this.LoginName,
      LoginPassword : this.LoginPassword
    };

    this.http.post('http://localhost:1234/api/login', user ).subscribe( data => {
      localStorage.setItem('authorization', data.toString());
      this.router.navigate(['/dashboard']);
    });
  }


}

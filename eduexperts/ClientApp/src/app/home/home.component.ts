import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public username = "";
  public password = "";
  public document = null;
  public baseurl = "";

  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, @Inject(DOCUMENT) d) {
    this.document = d;
    this.http = http;
    this.baseurl = baseUrl;
  }

  public login() {
    this.username = this.document.getElementById('username').value;
    this.password = this.document.getElementById('password').value;

    const formData = new FormData();
    formData.append("Username", this.username);
    formData.append("Password", this.password);

    this.http.post(this.baseurl + 'api/User/LoginCheck', formData, {})
      .subscribe(
        (res) => {
          console.log(res);
        },
        err => console.log(err)
      );
  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../users' 
//import { Http, Response, Headers } from '@angular/http';
//import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService ) { }

  user: User[];

  // fetchData = function() {
  //   this.http.get("http://localhost:3000/users").subscribe(
  //     (res: Response) => {
  //       this.products = res.json();
  //     }
  //   )
  // }

  ngOnInit() {

    this
    .userService
    .getUser()
    .subscribe((data: User[]) => {
      this.user = data;
    });
    //this.fetchData();
  
    }
}
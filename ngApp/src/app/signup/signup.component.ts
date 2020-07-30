import { Component, OnInit } from '@angular/core';
import { UserService  } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Signup(){    
  this.userService.Signup(this.user);
  console.log("called")
  alert("success")
  this.router.navigate(['/'])
  }

}

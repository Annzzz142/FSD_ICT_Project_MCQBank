import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })
  export class LoginComponent implements OnInit {

    constructor() { }
    

    ngOnInit(): void {
    }

    Login(){
    
      this.userService.Login(this.user);
      console.log("called")
      alert("success")
      this.router.navigate(['/test'])
    }

}

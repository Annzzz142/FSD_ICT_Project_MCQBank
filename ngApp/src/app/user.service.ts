import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  register(user){
    return this.http.post("http://localhost:3000/signup",{"user":user})
    .subscribe(data=>{
      console.log(data)
    })
    }

  loginUser(email,password){
    return this.http.post("http://localhost:3000/login",{"email":email,"password":password})
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  serverURL : string = "http://localhost:3000/users";
  constructor(private httpClient : HttpClient) { }

  createUser(user){
    return this.httpClient.post<{message:any}>(this.serverURL,user);
  }
  login(user){
    return this.httpClient.post<{message:any, connectedUser : any}>(this.serverURL + '/login',user);
  }
  getAllUsers(){
    return this.httpClient.get<{users:any}>(this.serverURL);
  }

  getUserById(userId){
   return this.httpClient.get<{user:any}>(`${this.serverURL}/${userId}`)
  }
  getUsersByRole(role){
    return this.httpClient.get<{users:any}>(`${this.serverURL}/getUsersByRole/${role}`)
   }

  updateUser(user){
    return this.httpClient.put<{message:any}>(`${this.serverURL}/${user._id}`,user)
  }


  deleteUser(userId){
    return this.httpClient.delete<{message:any}>(`${this.serverURL}/${userId}`)
  }


}

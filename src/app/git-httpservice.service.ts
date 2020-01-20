import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';




@Injectable()
  
export class GitHttpService {
  
  private username:string;
  private client_id = '5b9b9759cc8b0d8c106e'
  private client_secret = 'fa73efb1deb0eed34d9f0996dca5d3b3b50d4169'

  constructor(private http:HttpClient){
    console.log("service is always ready!");
    this.username = 'habibahassan';
  }
  
  getgitsearchInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map(result=>result);
  
  }
  getgitsearchRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.client_id + "&client_secret=" + this.client_secret).map(result=>result)
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

 

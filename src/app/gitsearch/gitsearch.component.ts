import { Component, OnInit } from '@angular/core';
import {GitHttpService} from "../git-httpservice.service";
import{ User } from '../user';


@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {

profile:any;
repos:any;
username:string;

constructor(private GitHttpService:GitHttpService) { 
  this.GitHttpService.getgitsearchInfo().subscribe(profile =>{
    console.log(profile);
    this.profile = profile;
  });
  this.GitHttpService.getgitsearchRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  });

 }

 
findProfile(){
  this.GitHttpService.updateProfile(this.username);
  this.GitHttpService.getgitsearchInfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });

  this.GitHttpService.getgitsearchRepos().subscribe(repos => {
    console.log(repos);
    this.repos = repos;
  })
}
  ngOnInit() {
    this.username='habibahassan';
    
    this.GitHttpService.updateProfile(this.username);
    this.GitHttpService.getgitsearchInfo().subscribe(profile => this.profile = profile);
    this.GitHttpService.getgitsearchRepos().subscribe(repos =>  this.repos = repos);
  }
}


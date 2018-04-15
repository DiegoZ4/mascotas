import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styles: []
})
export class HomeUserComponent implements OnInit {

  userName:string;
  userId:number;

  pets=[];

  constructor(
    private _user:UserService
  ) {
    let localData = JSON.parse(localStorage.getItem('userData'))
    this.userName = localData.name;
    this.userId = localData.id;
    console.log(localData);

    this._user.getPet(this.userId)
        .subscribe(resp =>{
          this.pets.push(resp);
          console.log(this.pets[0]);
        })
  }

  ngOnInit() {
  }

}

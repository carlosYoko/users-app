import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { TUser } from './utilities/custom-types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})



export class UsersListComponent {

  Users: TUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.Users = data.results
      console.log(this.Users)
    })
  }
}

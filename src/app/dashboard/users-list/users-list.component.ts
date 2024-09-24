import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})



export class UsersListComponent {

  Users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data)
      this.Users = data
      console.log(this.Users)
    })
  }
}

type User =
  {
    id: number
    name: string;
    gender: string;
    email: string;
    status: string;
  }
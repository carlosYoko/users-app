import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  id: number | null;

  constructor(private aRotue: ActivatedRoute, private userService: UserService) {
    this.id = Number(this.aRotue.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    this.getUserById()
  }

  getUserById(): void {
    if (this.id !== null) {
      this.userService.getUserById(this.id!).subscribe(data => {
        console.log(data)
      });
    }
  }
}
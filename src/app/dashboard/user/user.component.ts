import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loading: boolean = true;
  urlImg: string = 'https://cdn.pixabay.com/photo/2017/05/18/11/28/laughs-2323344_1280.jpg'
  id: number | null;
  name: string = '';
  email: string = '';
  gender: string = '';
  status: boolean = false;

  constructor(private aRotue: ActivatedRoute, private userService: UserService) {
    this.id = Number(this.aRotue.snapshot.paramMap.get('id'))
  }

  ngOnInit() {
    this.getUserById()
  }

  getUserById(): void {
    if (this.id !== null) {
      this.userService.getUserById(this.id!).subscribe(data => {
        this.name = data.name;
        this.email = data.email;
        this.gender = data.gender;
        this.status = data.status;
        this.loading = false
      });
    }
  }
}
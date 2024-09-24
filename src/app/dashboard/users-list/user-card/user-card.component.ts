import { Component, Input, OnInit } from '@angular/core';
import { TUser } from '../utilities/custom-types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user?: TUser;
  id!: number;
  urlImg = 'https://cdn.pixabay.com/photo/2023/10/24/05/08/dog-8337394_1280.jpg'

  ngOnInit(): void {
    this.id = this.user!.id
  }
}

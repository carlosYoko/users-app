import { Component, Input, OnInit } from '@angular/core';
import { TUser } from '../utilities/custom-types';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user?: TUser;
  id!: string;

  ngOnInit(): void {
    this.id = this.user!.id.value;
  }
}

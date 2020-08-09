import { Component, OnInit } from '@angular/core';
import * as Data from './assets/mock_data_(5).json';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // userData: {
  //   first_name:String,
  //   last_name: String,
  //   favourite_movie: String,
  //   likes_popcorn: Boolean,
  //   gender: String
  // }[] = Data;

  constructor() { }

  ngOnInit(): void {
  }

}

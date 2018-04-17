import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { currentUser } from '../currentUser';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
	@Input() thisUser: User;
  currentUser = currentUser;

  ngOnInit(){
    // console.log("This is the display name of the current user: " + currentUser.displayName);
  }
}

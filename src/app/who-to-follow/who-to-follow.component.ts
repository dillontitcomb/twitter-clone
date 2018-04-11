import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { UserService } from '../user.service';
import { CurrentUserService } from '../current-user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-who-to-follow',
  templateUrl: './who-to-follow.component.html',
  styleUrls: ['./who-to-follow.component.css'],
	providers: [UserService]
})
export class WhoToFollowComponent implements OnInit {
	users: FirebaseListObservable<any[]>;
	user: FirebaseObjectObservable<any>;
	constructor (private userService: UserService, private currentUserService: CurrentUserService) {}

	ngOnInit(){
		this.users = this.userService.getUsers();
		this.user = this.currentUserService.getCurrentUser();
		console.log(this.users);
		console.log(this.user);
		console.log(this.user);
	}
}

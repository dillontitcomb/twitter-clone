import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { UserService } from '../user.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-who-to-follow',
  templateUrl: './who-to-follow.component.html',
  styleUrls: ['./who-to-follow.component.css'],
	providers: [UserService]
})
export class WhoToFollowComponent implements OnInit {
	users: FirebaseListObservable<any[]>;
	constructor (private userService: UserService) {}
	@Input() thisUser: User;

	ngOnInit(){
		this.users = this.userService.getUsers();
		console.log(this.users);
	}
}

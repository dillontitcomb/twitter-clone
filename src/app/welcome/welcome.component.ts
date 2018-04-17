import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
	providers: [UserService]
})
export class WelcomeComponent {
	constructor(private userService: UserService) {}

	submitForm(userName: string, password: string, displayName: string, handle: string) {
		let newUser = new User(userName, password, displayName, handle);
		this.userService.addUser(newUser);
	}
}

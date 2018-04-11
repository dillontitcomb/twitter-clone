import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { CurrentUserService } from '../current-user.service';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
	providers: [UserService, CurrentUserService]
})
export class WelcomeComponent {
	constructor(private userService: UserService, private currentUserService: CurrentUserService) {}

	submitForm(email: string, password: string, displayName: string, handle: string) {
		let newUser = new User(email, password, displayName, handle);
		this.userService.addUser(newUser);
		this.currentUserService.setCurrentUser(newUser);
	}
}

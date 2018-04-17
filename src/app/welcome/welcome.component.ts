import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { currentUser } from '../currentUser';

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
    currentUser.userName = userName;
    currentUser.password = password;
    currentUser.displayName = displayName;
    currentUser.handle = handle;
    currentUser.displayImg = "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg"
	}
}

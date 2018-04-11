import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { CurrentUserService } from '../current-user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
	providers: [ CurrentUserService ]
})
export class ProfileInfoComponent implements OnInit {
	user: FirebaseObjectObservable<any>;
	constructor(private currentUserService: CurrentUserService) {}
	ngOnInit() {
		this.user = this.currentUserService.getCurrentUser();
	}
}

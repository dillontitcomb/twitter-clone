import { Injectable } from '@angular/core';
import { User } from './models/user.model';
import { Tweet } from './models/tweet.model';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class CurrentUserService {
 	user: FirebaseObjectObservable<any>;

  constructor(private database: AngularFireDatabase) {
		this.user = database.object('currentUser');
	}

	getCurrentUser() {
		return this.user;
	}

	setCurrentUser(newUser: User) {
		let thisUser = this.getCurrentUser();
		thisUser.update({	email: newUser.email,
											password: newUser.password,
											displayName: newUser.displayName,
											handle: newUser.handle})
	}
}

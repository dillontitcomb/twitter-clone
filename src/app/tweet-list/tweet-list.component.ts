import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { TweetService } from '../tweet.service';
import { CurrentUserService } from '../current-user.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css'],
	providers: [TweetService, CurrentUserService]
})
export class TweetListComponent implements OnInit {
	tweets: FirebaseListObservable<any[]>;
	user: FirebaseObjectObservable<any>;
	constructor(private tweetService: TweetService, private currentUserService: CurrentUserService) {}

	ngOnInit(){
		this.tweets = this.tweetService.getTweets();
		this.user = this.currentUserService.getCurrentUser();
	}
}

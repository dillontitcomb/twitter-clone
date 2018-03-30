import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-tweet-list',
  templateUrl: './tweet-list.component.html',
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent {
	@Input() childTweetList: Tweet[];
}

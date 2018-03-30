import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.css']
})
export class AddTweetComponent {
	@Input() thisUser: User;
	@Output() sendTweet = new EventEmitter();

	currentTime = new Date();
	month: number = this.currentTime.getMonth() + 1;
	day: number = this.currentTime.getDate();
	year: number = this.currentTime.getFullYear();
	dateString: string = this.month + "/" + this.day + "/" + this.year;

	submitForm(description: string, image: string, link: string) {
		let newTweet = new Tweet(this.thisUser, description, image, link, this.currentTime, this.dateString);
		this.sendTweet.emit(newTweet);
	}
}

import { Component } from '@angular/core';
import { User } from './models/user.model';
import { Tweet } from './models/tweet.model';
import { TweetListComponent } from './tweet-list/tweet-list.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Twitter Clone';
	currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
	dateString: string = this.month + "/" + this.day + "/" + this.year;

	masterTweetList: Tweet[] = [
		new Tweet("ElonMusk", "I really like space", "", "", this.currentTime, this.dateString),
		new Tweet("DonTrump", "I really like walls", "", "", this.currentTime, this.dateString),
		new Tweet("Oprah", "I really like books", "", "", this.currentTime, this.dateString)
	];
}

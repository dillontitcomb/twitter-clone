import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user.model';
import { Tweet } from '../models/tweet.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent  {
	@Input() childTweetList: Tweet[];
	@Input() thisUser: User;
	@Input() childUserList: User[];
	
	currentTime = new Date();
	month: number = this.currentTime.getMonth() + 1;
	day: number = this.currentTime.getDate();
	year: number = this.currentTime.getFullYear();
	dateString: string = this.month + "/" + this.day + "/" + this.year;

	masterUserList: User[] =  [
		new User("Donald Trump", "@POTUS", "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/05/12/104466932-PE_Color.240x240.jpg?v=1494613853"),
		new User("Elon Musk", "@SpaceInvader", "https://amp.businessinsider.com/images/5a451b22b0bcd51d008b7445-750-562.jpg"),
		new User("Oprah Winfrey", "@EverybodyGetsATweet", "https://specials-images.forbesimg.com/imageserve/5a8ddd184bbe6f2652f62885/416x416.jpg?background=000000&cropX1=968&cropX2=1722&cropY1=150&cropY2=904")
	]

	masterTweetList: Tweet[] = [
		new Tweet(this.masterUserList[1], "I really like space", "", "", this.currentTime, this.dateString),
		new Tweet(this.masterUserList[0], "I really like walls", "", "", this.currentTime, this.dateString),
		new Tweet(this.masterUserList[2], "I really like books", "", "", this.currentTime, this.dateString)
	];

	currentUser: User = new User("Me", "@personUsingTwitter", "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg");

	addTweet(newTweet: Tweet) {
		this.masterTweetList.push(newTweet);
	}




}

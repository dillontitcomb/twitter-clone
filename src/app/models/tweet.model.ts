import { User } from './user.model';

export class Tweet {
	public isLiked: boolean = false;
	public likes: number = 0;
	public retweets: number = 0;
	constructor (public author: string, public description: string, public image: string, public imgLink: string, public postTime: Date, public postDate: string) {}
}

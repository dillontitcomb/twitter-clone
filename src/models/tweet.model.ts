export class Tweet {
	public isLiked: boolean = false;
	constructor (public author: User, public description: string, public image: string, public imgLink: string, public likes: number, public retweets: number, public postTime: number, public postDate: Date) {}
}

import { Tweet } from './tweet.model';

export class User {
	public followers: User[];
	public following: User[];
	public displayName: string;
	public handle: string;
	constructor (public userName: string, public password: string, public displayImg = "https://www.merriam-webster.com/assets/mw/images/article/art-wap-article-main/egg-3442-e1f6463624338504cd021bf23aef8441@1x.jpg") {}
}

import { Tweet } from './tweet.model';

export class User {
	public followers: User[];
	public following: User[];
	constructor (public handle: string, public displayName: string, public displayImg: string) {}
}

import { Tweet } from './tweet.model';

export class User {
	public followers: User[];
	public following: User[];
	constructor (public displayName: string, public handle: string, public displayImg: string) {}
}

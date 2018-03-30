export class User {
	public followers: Array[User] = [];
	public following: Array[User] = [];
	constructor (public handle: string, public displayName: string, public displayImg: string) {}
}

// User model based on the structure of github api at
// https://api.github.com/users/{username}

export interface User {
	login: string;
	avatar_url: string;
	public_repos: string;
	public_gists: number;
	followers: number;
	following: number
}
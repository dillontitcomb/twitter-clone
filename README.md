# _Dillon's Twitter Clone_

#### Typescript & Angular 5 Exercise for Epicodus (continued), 4.6.2018
_This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5._

#### By _**Dillon Titcomb**_

## Description

_This webpage aims to resemble the layout and feature set of the popular twitter.com. Users can sign up for new accounts or sign in to access their personalized twitter feed. Users can create, view, and delete their tweets and search for those of others._

## Specifications / Planning

To do:
	- Get routing working for all pages
	- Connect Firebase
	- Create sign up flow
	- Use services to provide tweet and user data
	- Use pipes to filter tweets

Models:
	User:
	- handle: string
	- displayName: string
	- displayImg: string(url)
	- Followers [User]
	- Following [User]

Tweet:
	- author: object: User
	- description: string
	- image: string (url)
	- imgLink: string
	- likes: number
	- retweets: number
	- postTime: number
	- postDate: date
	- isLiked: boolean

Components:
 	- Welcome splash page
	-	Create profile page
	-	Log in page
	- Browse page
	- App component
	- Nav Bar
	- User Info
	- Create Tweet
	- Tweet List
	- Who to follow
	- Trends to follow
	- Footer Box

## Setup/Installation Requirements

* _Clone this repository_
* _Issue the following commands in terminal:_
* _npm install_
* _ng serve_
* _Navigate to `http://localhost:4200/`_
* _Explore the twitter-verse._

## Known Bugs

_No known bugs._

## Support and contact details

_Please contact me at dillontitcomb@gmail.com with inquiries._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Typescript_
* _Angular 5_
* _Node / NPM_

## Link to page

https://github.com/dillontitcomb/twitter-clone

### License

*The software is licensed under the MIT license.*

Copyright (c) 2018 **_Dillon Titcomb_**

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { WhoToFollowComponent } from './who-to-follow/who-to-follow.component';
import { TrendsComponent } from './trends/trends.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { WelcomeComponent } from './welcome/welcome.component';


const appRoutes: Routes = [
	{
		path: '',
		component: WelcomeComponent
	}
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { WhoToFollowComponent } from './who-to-follow/who-to-follow.component';
import { TrendsComponent } from './trends/trends.component';
import { InfoBlockComponent } from './info-block/info-block.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    AddTweetComponent,
    NavbarComponent,
    ProfileInfoComponent,
    WhoToFollowComponent,
    TrendsComponent,
    InfoBlockComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

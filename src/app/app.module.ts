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
import { BrowseComponent } from './browse/browse.component';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

export const firebaseConfig = {
	apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

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
    WelcomeComponent,
    BrowseComponent
  ],
  imports: [
    BrowserModule,
		FormsModule,
		routing,
		AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

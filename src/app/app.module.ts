import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { AddTweetComponent } from './add-tweet/add-tweet.component';

@NgModule({
  declarations: [
    AppComponent,
    TweetListComponent,
    AddTweetComponent
  ],
  imports: [
    BrowserModule,
		FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

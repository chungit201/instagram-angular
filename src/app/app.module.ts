import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './screen/header/header.component';
import { PostFormComponent } from './screen/header/post-form/post-form.component';
import { FooterComponent } from './screen/footer/footer.component';
import { LoginComponent } from './screen/login/login.component';
import { PostsComponent } from './screen/main/posts/posts.component';
import { MessengerComponent } from './screen/messenger/messenger.component';
import { StoryComponent } from './screen/main/story/story.component';
import { SideBarMenuComponent } from './screen/main/side-bar-menu/side-bar-menu.component';
import { SearchComponent } from './screen/header/search/search.component';
import { MainComponent } from './screen/main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostFormComponent,
    FooterComponent,
    LoginComponent,
    PostsComponent,
    MessengerComponent,
    StoryComponent,
    SideBarMenuComponent,
    SearchComponent,
    MainComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

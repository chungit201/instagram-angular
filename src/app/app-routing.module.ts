import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessengerComponent } from './screen/messenger/messenger.component';
import { PostsComponent } from './screen/main/posts/posts.component';
import { SignUpComponent } from './screen/sign-up/sign-up.component';
const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: PostsComponent
  },
  { 
    path: 'messenger', 
    component: MessengerComponent 
  },
  {
    path: 'sign-up',
    component: SignUpComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

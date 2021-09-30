import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessengerComponent } from './screen/messenger/messenger.component';
import { PostsComponent } from './screen/main/posts/posts.component';
import { SignUpComponent } from './screen/sign-up/sign-up.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screen/client/client.module').then((m) => m.ClientModule),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

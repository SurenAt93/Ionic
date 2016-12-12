import { NgModule } from '@angular/core';

import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

// our pages

import { ReposPage } from '../pages/repos/repos';

import { OrganisationsPage } from '../pages/organisations/organisations';

import { UsersPage } from '../pages/users/users';

// user details

import { UserDetailsPage } from '../pages/user-details/user-details';

// providers

import { GithubUsers } from '../providers/github-users'; 

@NgModule({
  declarations: [
    MyApp,
    ReposPage,
    OrganisationsPage,
    UsersPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReposPage,
    OrganisationsPage,
    UsersPage,
    UserDetailsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {}

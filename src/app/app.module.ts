import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent } from './page/index/index.component';
import { UsersComponent } from './page/users/users.component';
import { UserEditComponent } from './page/user-edit/user-edit.component';
import { UserAddComponent } from './page/user-add/user-add.component';
import { AboutComponent } from './page/about/about.component';
import { FilterPipe } from './pipe/filter.pipe';
import { SortPipe } from './pipe/sort.pipe';

const appRoutes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "users/:id",
    component: UserEditComponent
  },
  {
    path: "addnewuser",
    component: UserAddComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "**",
    component: IndexComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    UsersComponent,
    UserEditComponent,
    UserAddComponent,
    AboutComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

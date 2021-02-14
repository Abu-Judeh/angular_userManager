import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UsersArrayService } from './users-array.service';
import { AboutComponent } from './about/about.component';
import { ImageuplodeComponent } from './imageuplode/imageuplode.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    UsersComponent,
    AboutComponent,
    ImageuplodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [UsersArrayService],
  bootstrap: [AppComponent]
})
export class AppModule { }

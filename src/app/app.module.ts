import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { UserService } from './user.service';
import appcrudOperation from './routerConfig';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    RouterModule.forRoot(appcrudOperation),
    HttpClientModule
  ],

  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

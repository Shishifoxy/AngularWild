import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent, UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

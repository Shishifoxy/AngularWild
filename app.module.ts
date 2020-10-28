import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HightlightDirective } from './hightlight.directive';
import { DisplayguestDirective } from './displayguest.directive';
import { DiplaymovieDirective } from './diplaymovie.directive';

@NgModule({
  declarations: [
    AppComponent, UserProfileComponent, HightlightDirective, DisplayguestDirective, DiplaymovieDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

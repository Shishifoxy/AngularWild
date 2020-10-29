import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserProfileComponent } from './user-profile/user-profile.component'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HightlightDirective } from './hightlight.directive';
import { ColorOnlyOneLiDirective } from './color-only-one-li.directive';
import { DisplayListDirective } from './displaylist.directive';

@NgModule({
  declarations: [
    AppComponent, UserProfileComponent, HightlightDirective, ColorOnlyOneLiDirective, DisplayListDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

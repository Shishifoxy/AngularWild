import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  songList:string[] = ["Alejandro", "Ne me quitte pas", "Le temps est bon"];
  title = 'Raclette Party';
  isThisIngredientVital :boolean = true;
  displayList :boolean = false;
  useColor :boolean = true;
}

import { Component } from '@angular/core';

@Component({
  selector: 'main-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  title = 'Pokédex';
  subtitle = 'Here you can see the first 10 pokemon';
  constructor() { }
}

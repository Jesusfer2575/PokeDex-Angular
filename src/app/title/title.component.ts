import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {
  title = 'Pokédex';
  subtitle = 'Here you can see the first 151 pokemon';
  constructor() { }
}

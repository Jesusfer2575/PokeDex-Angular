import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  name: string = '';
  @Output() nameChange = new EventEmitter();
  constructor() { }

  handleClick() {
    this.nameChange.emit(this.name);
  }
}

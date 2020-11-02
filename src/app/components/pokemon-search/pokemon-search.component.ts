import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent {
  name: string = '';
  @Output() nameClick = new EventEmitter();
  @Output() nameChange = new EventEmitter();
  constructor() { }

  handleClick() {
    this.nameClick.emit(this.name);
  }

  onKeyUp(event) {
    this.nameChange.emit(event.target.value);
  }
}

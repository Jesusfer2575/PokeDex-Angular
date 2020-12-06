import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { Pokemong } from '../../models/pokemong.model';
import { AppState } from '../../app.state';
import * as fromActions from '../../actions/pokemong.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  addPokemong(name, url) {
    const newPokemong: Pokemong = {
      name,
      url
    }
    this.store.dispatch(new fromActions.AddPokemong(newPokemong));
  }

  ngOnInit(): void {
  }

}

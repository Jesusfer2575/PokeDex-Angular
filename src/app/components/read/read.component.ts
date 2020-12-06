import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Pokemong } from '../../models/pokemong.model';
import { AppState } from '../../app.state';
import * as fromActions from '../../actions/pokemong.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  pokemongs$: Observable<Pokemong[]>;

  constructor(private store: Store<AppState>) { 
    this.pokemongs$ = store.select('pokemong');
  }

  ngOnInit(): void {
  }

  removePokemong(name: string) {
    this.store.dispatch(new fromActions.RemovePokemong(name));
  }

}

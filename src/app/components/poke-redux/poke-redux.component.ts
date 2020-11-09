import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { appState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-poke-redux',
  templateUrl: './poke-redux.component.html',
  styleUrls: ['./poke-redux.component.css']
})
export class PokeReduxComponent implements OnInit {
  data$: Observable<string>;

  constructor(private store: Store<appState>) { 
    // The param passed as string is the name of the property from the state of the store
    this.data$ = store.select('language');
  }

  ngOnInit(): void {
  }

  changeSpanish() {
    this.store.dispatch({
      type: 'CHANGE_SPANISH',
    });
  }

  changeEnglish() {
    this.store.dispatch({
      type: 'CHANGE_ENGLISH',
    });
  }
}

import { Action } from '@ngrx/store';

export interface appState {
  language: string;
}

export const initialState = {
  language: 'Spanish'
}

export function reducer(state: appState = initialState, action: Action) { 
  console.log(action);
}
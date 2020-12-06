// Section 1
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Pokemong } from './../models/pokemong.model';

// Section 2
export const ADD_POKEMONG       = '[Pokemong] Add';
export const REMOVE_POKEMONG    = '[Pokemong] Remove';

// Section 3
export class AddPokemong implements Action {
    readonly type = ADD_POKEMONG;

    constructor(public payload: Pokemong) {}
}

export class RemovePokemong implements Action {
    readonly type = REMOVE_POKEMONG;

    constructor(public payload: string) {}
}

// Section 4
export type Actions = AddPokemong | RemovePokemong;
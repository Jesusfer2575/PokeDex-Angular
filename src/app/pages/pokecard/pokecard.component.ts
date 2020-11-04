import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeAPIService } from '@services/pokeapi.service';
import { ResponseSinglePokemon } from '@interfaces/pokemon';

@Component({
  selector: 'app-pokecard',
  templateUrl: './pokecard.component.html',
  styleUrls: ['./pokecard.component.css']
})
export class PokecardComponent implements OnInit {
  pokemon: ResponseSinglePokemon;

  @ViewChild('testViewChild', { static: true }) testViewChild: ElementRef;

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeAPI: PokeAPIService,
  ) { 
    
  }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    const namePokemon =  this.activatedRoute.snapshot.paramMap.get("name");
    this.pokeAPI.getPokemon(`https://pokeapi.co/api/v2/pokemon/${namePokemon}`)
      .subscribe((response: ResponseSinglePokemon) => {
        this.pokemon = { ...response };
      });
    console.log('ViewChild', this.testViewChild);
  }
}

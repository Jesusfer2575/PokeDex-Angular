import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListComponent } from '@components/pokemon-list/pokemon-list.component';
import { TitleComponent } from '@components/title/title.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonComponent } from '@components/pokemon/pokemon.component';
import { PokeformComponent } from '@components/pokeform/pokeform.component';
import { PokemonSearchComponent } from '@components/pokemon-search/pokemon-search.component';
import { TestDirective } from '@directives/test-directive.directive';
import { SubjectComponent } from '@components/subject/subject.component';

import { HomeComponent } from '@pages/home/home.component';

import { RouteModule } from '@routes/route.module';
import { SubpageComponent } from './pages/subpage/subpage.component';
import { PokecardComponent } from './pages/pokecard/pokecard.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    TitleComponent,
    PokemonComponent,
    PokeformComponent,
    PokemonSearchComponent,
    TestDirective,
    SubjectComponent,
    HomeComponent,
    SubpageComponent,
    PokecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { SubpageComponent } from '@pages/subpage/subpage.component';
import { PokecardComponent } from '@pages/pokecard/pokecard.component';
import { PokeReduxComponent } from '@components/poke-redux/poke-redux.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'subpage',
    component: SubpageComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokecardComponent,
  },
  {
    path: 'redux',
    component: PokeReduxComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RouteModule { }

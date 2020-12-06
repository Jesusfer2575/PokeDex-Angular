import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '@pages/home/home.component';
import { SubpageComponent } from '@pages/subpage/subpage.component';
import { PokecardComponent } from '@pages/pokecard/pokecard.component';
import { ReadComponent } from '@components/read/read.component';
import { CreateComponent } from '@components/create/create.component';

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
    path: 'read',
    component: ReadComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pokemon/:id',
    component: PokemonComponent
  },
  {
    path: 'search/:search',
    component: SearchComponent
  },
  {
    path: '**',
    redirectTo: '/search'
  }
];

export const APP_ROUTES = RouterModule.forRoot( routes, { useHash: true, relativeLinkResolution: 'legacy' } );

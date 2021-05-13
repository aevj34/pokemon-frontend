import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PipesModule } from '../pipes/pipes.module';
import { PokemonGridComponent } from './pokemon-grid/pokemon-grid.component';
import { TypesSlideshowComponent } from './types-slideshow/types-slideshow.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SlideshowComponent,
    PokemonGridComponent,
    TypesSlideshowComponent
  ],
  exports: [
    NavbarComponent,
    SlideshowComponent,
    PokemonGridComponent,
    TypesSlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PipesModule
  ]
})
export class ComponentsModule { }

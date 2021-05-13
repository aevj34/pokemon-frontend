import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pokemonsSlideshow: Pokemon[] = []
  public recentPokemons: Pokemon[] = []
  public pokemons: Pokemon[] = []

  PAGE_SIZE = 10; 

  @HostListener('window:scroll', ['$event'])
  onScroll() {

    const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1000;
    const max = ( document.documentElement.scrollHeight || document.body.scrollHeight );

   
     if ( pos > max ) {
       if ( this.pokemonService.cargando ) { return; }
        this.pokemonService.getPokemons(this.PAGE_SIZE).subscribe( res => {
        this.pokemons.push(...res.pokemons );
      });
      }
    
    
  }


  constructor(private pokemonService: PokemonService) {
    this.getPokemonsToSlide();
    this.getPokemons();
    this.getRecentPokemons();
  }

  ngOnInit(): void {
  }


  getPokemonsToSlide() {
 
    const SKIP = 0;
    this.pokemonService.getPokemonsToSlice(SKIP, this.PAGE_SIZE)
          .subscribe(res  => {
             this.pokemonsSlideshow = res.pokemons;
          });
  }

  getRecentPokemons() {
 
    const SKIP = 50;
    this.pokemonService.getPokemonsToSlice(SKIP, this.PAGE_SIZE)
          .subscribe(res  => {
             this.recentPokemons = res.pokemons;
          });
  }

  getPokemons() {
    this.pokemonService.getPokemons(this.PAGE_SIZE)
          .subscribe(res  => {
             this.pokemons = res.pokemons;
          });
  }

  ngOnDestroy() {
    this.pokemonService.resetCarteleraPage();
  }

}

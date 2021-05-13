import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  results: string;
  public pokemons: Pokemon[] = []
  
  constructor(private pokemonService: PokemonService,  
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.search = params.get('search').toString();

      console.log(this.search);
      this.searchPokemons(this.search);
    });

  }

  searchPokemons(search) {
    this.pokemonService.searchPokemons(search)
          .subscribe(res  => {
             this.pokemons = res.pokemons;
             this.results = this.pokemons.length + ' pokemones encontrados para ' + search;
          });
  }

}

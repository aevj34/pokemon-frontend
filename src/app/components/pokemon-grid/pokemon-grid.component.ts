import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-grid',
  templateUrl: './pokemon-grid.component.html',
  styleUrls: ['./pokemon-grid.component.css']
})
export class PokemonGridComponent implements OnInit {


  @Input() pokemons: Pokemon[];

  constructor( private router: Router ) { }

  ngOnInit(): void {
    // console.log(this.pokemons);
  }

  onPokemonClick( pokemon: Pokemon ) {
    this.router.navigate(['/pokemon', pokemon.id ]);
  }


}

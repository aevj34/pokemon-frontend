import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  pokemon: Pokemon;
  id: string;

  constructor(private pokemonService: PokemonService,  
    private route: ActivatedRoute,
    private location: Location,) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.id = params.get('id').toString();
      this.obtainPokemon(this.id);
    });

  }

  obtainPokemon(id) {
   
    this.pokemonService.obtainPokemon(id)
          .subscribe(res  => {
             this.pokemon = res.pokemon;
             console.log(this.pokemon);
          });
  }

  onRegresar() {
    this.location.back();
  }

}

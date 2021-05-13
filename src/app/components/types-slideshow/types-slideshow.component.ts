import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import Swiper from 'swiper'

@Component({
  selector: 'app-types-slideshow',
  templateUrl: './types-slideshow.component.html',
  styleUrls: ['./types-slideshow.component.css']
})
export class TypesSlideshowComponent implements OnInit {

  @Input() pokemons: Pokemon[];
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container2', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    });
  }

  onPokemonClick( pokemon: Pokemon ) {
    this.router.navigate(['/pokemon', pokemon.id ]);
  }


}

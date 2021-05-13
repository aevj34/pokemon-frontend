import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit {

  @Input() pokemons: Pokemon[];
  
  public mySwiper: Swiper;

  constructor(private router: Router) { }

  ngAfterViewInit(): void {
   
    this.mySwiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,
    
    });
    
  }

  ngOnInit(): void {
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }

  onSlidePrev(){
    this.mySwiper.slidePrev();
  }

  onPokemonClick( pokemon: Pokemon ) {
    this.router.navigate(['/pokemon', pokemon.id ]);
  }


}

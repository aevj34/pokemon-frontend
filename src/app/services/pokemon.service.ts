import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private skip = 0;
  public cargando: boolean = false;

  constructor(private http: HttpClient) { }

  resetCarteleraPage() {
    this.skip = 0;
  }

  getPokemonsToSlice(skip: number, pageSize: number): any {
      const url = environment.apiUrl + '/pokemon?skip=' + skip + '&pageSize=' + pageSize;
      return this.http.get<any>(url);
  }

  getPokemons(pageSize: number): any {

    if ( this.cargando ) {
      return of([]);
    }
      this.cargando = true;
      const url = environment.apiUrl + '/pokemon?skip=' + this.skip + '&pageSize=' + pageSize;
      return this.http.get<any>(url)
      .pipe(
        map( (resp) => resp ),
        tap( () => {
          this.skip += pageSize;
          this.cargando = false;   
        })
      );
  }

  searchPokemons(search): any {
    const url = environment.apiUrl + '/pokemon/search/' + search;
    return this.http.get<any>(url);
  }

  obtainPokemon(id): any {
    const url = environment.apiUrl + '/pokemon/' + id;
    return this.http.get<any>(url);
  }

}

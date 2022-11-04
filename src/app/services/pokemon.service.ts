import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from '../model/Pokemon';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  
  baseUrl:string = environment.baseURL;
  constructor(private _http:HttpClient) { }


  getPokemons(index:number){
    return this._http.get<any>(`${this.baseUrl}/pokemon/${index}`)
  }
}

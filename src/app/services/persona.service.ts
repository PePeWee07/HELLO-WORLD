import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Persona } from '../model/Persona';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = "https://sqs-facturacion-web.herokuapp.com/api/";
  
  constructor(private _http:HttpClient) { }


  getPersona(){
    return this._http.get<Persona[]>(this.url + "clientes")
  }

  register(persona: Persona) {

    let json = JSON.stringify(persona);
    let params = json;
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this._http.post(this.url + 'cliente', params, { headers: headers }).pipe(map(data => { return data }));
  }

}

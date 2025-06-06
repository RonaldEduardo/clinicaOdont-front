import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from '../paciente/models/paciente';


@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private readonly API_URL = 'http://localhost:8080/pacientses';

  constructor( private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Paciente[]>(this.API_URL)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './cliente.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  url: string;

  constructor( private http: HttpClient) { } 

  getAll(){
    return this.http.get<[Produto]>(this.url);
  }
}

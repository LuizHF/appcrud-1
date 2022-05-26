import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Cliente{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url = 'http;//localhost/apiAppCrud/apiCliente';

  constructor(private htpp: HttpClient ) { }

  getALL(){
    return this.htpp.get<[Cliente]>(this.url);
  }

  remover(id: any){
    return this.htpp.delete(this.url+'?id=' + id);
  }

  create(cliente: Cliente) {
    return this.htpp.post(this.url, cliente)
  }
}

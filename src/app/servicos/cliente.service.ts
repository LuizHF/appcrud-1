import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Produto{
  id: number;
  descricao: string;
  valor: number;
}

export interface Cliente{
  id: number;
  nome: string;
  telefone: string;
  endereco: string;
}

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {

  private url = 'http;//localhost/apiAppCrud/apiProduto.php';

  constructor(private htpp: HttpClient ) { }
}

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

  update (cliente: Cliente, id: any) {
    return this.htpp.put(this.url+'?id=' + id, cliente);
  }
}

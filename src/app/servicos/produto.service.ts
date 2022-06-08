import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Produto{
  id: number;
  descricao: string;
  valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  remove(id: any) {
    throw new Error('Method not implemented.');
  }
  private url ='http://localhost/apiAppCrud/apiProduto.php';
  
  constructor( private http: HttpClient) { } 

  getAll(){
    return this.http.get<[Produto]>(this.url);
  }
  
  create(produto: Produto){
    return this.http.post(this.url, produto);
  }

}

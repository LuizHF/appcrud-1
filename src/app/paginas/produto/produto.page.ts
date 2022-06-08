import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Produto, ProdutoService } from 'src/app/servicos/produto.service';
//import { ModalProdutoPage } from '/modalProduto/modalProduto.page';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.page.html',
  styleUrls: ['./produto.page.scss'],
})
export class ProdutoPage implements OnInit {
  produtos: Produto[];

  constructor( private service: ProdutoService, private modalCtrl: ModalController)  { }

  ngOnInit() {
    this.service.getAll().subscribe(resposta => {
      this.produtos = resposta;
    });
  }


  // remover(id: any){
  //   this.service.remove(id).subscribe( () =>{
  //     this.service.getAll().subscribe(resposta => {
  //       this.produtos = resposta;
  //   });
  // });
  // }
  
  // novoProduto(): void{
  //   this.modalCtrl.create({
  //     component: ModalProdutoPage
  //   }).then(modal => {
  //     modal.present();
  //     return modal.onDidDismiss();
  //   }).then(({data}) => {
  //     this.service.getAll().subscribe(resposta => {
  //       this.produtos = resposta;
  //     });
  //   });
  // }

  // atuaizar(p: Produto){
  //   this.modalCtrl.create({
  //     component: ModalProdutoPage,
  //     componentProps: {p}
  //   }).then(modal => {
  //     modal.present();
  //     return modal.onDidDismiss();
  //   }).then(({data}) => {
  //     this.service.getAll().subscribe(resposta => {
  //       this.produtos = resposta;
  //     });
  //   });
  // }
}
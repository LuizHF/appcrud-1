import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {
  clientes: Cliente[];

  constructor( private service: ClienteService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.service.getALL().subscribe(resposta => {
      this.clientes = resposta;
    });
  }

  remover(id: any){
    this.service.remover(id).subscribe( () =>{
      this.service.getALL().subscribe(resposta => {
        this.clientes = resposta;
      });
    });
  }

  novoCliente(){
    this.modalCtrl.create({
      component: ModalController
    }).then(modal => {
      modal.present()
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getALL().subscribe(resposta => {
        this.clientes = resposta;
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

  constructor( private modalCtrl: ModalController, private service: ClienteService) { }

  ngOnInit() {
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }
  enviarFormulario(form: NgForm){
    const cliente = form.value;
    this.service.create(cliente).subscribe(resposta => {
      this.modalCtrl.dismiss();
    })
  }

}

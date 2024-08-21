import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private alertController: AlertController
  ) {}

  async botonHandler()
  {
    let alerta = await this.alertController.create(
      {
        header: "Bienvenido! Ingrese su nombre:",
        inputs: [
          {
            type: "text",
            name: "titulo",
            placeholder: "Escriba aquí"
          }
        ]
      }
    )
      await alerta.present();

  }
}

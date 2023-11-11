import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from './../modelo/UsuarioLogeado';  
import { AuthService } from './../servicio/auth.service';
import { ViewWillEnter,ViewDidLeave } from '@ionic/angular'; 
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-mostrar-login',
  templateUrl: './mostrar-login.page.html',
  styleUrls: ['./mostrar-login.page.scss'],
})
export class MostrarLoginPage implements ViewWillEnter,ViewDidLeave {
  public usuarioActivo: UsuarioLogeado | null = null; 
  private suscripcion: Subscription | null=null; 
  constructor(
    private auth: AuthService
  ) { }
  ionViewDidLeave(): void {
    this.suscripcion?.unsubscribe();
  }
  ionViewWillEnter(): void {
    this.auth.$usuarioActivo.subscribe(usuario => {
      this.usuarioActivo = usuario;
    })
  }

  ngOnInit() {
  }

}

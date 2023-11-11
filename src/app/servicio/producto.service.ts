import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto, respuestaProducto } from '../modelo/Producto'; 
import { LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private readonly BASE_URL = "https://dummyjson.com/products";
  public productos: Producto[] = [];  
  private skip = 0;
  private limit = 10;

  constructor(
    private http: HttpClient,
    private load: LoadingController
  ) { }

  public async consultarProductos(){  
    const control = await this.load.create({
      message: "Cargando productos"
    });
    control.present();

    const url = `${this.BASE_URL}?limit=${this.limit}&skip=${this.skip}`;

    this.http.get<respuestaProducto>(url).subscribe(respuesta => { 
      control.dismiss();
      this.skip += this.limit;
      this.productos = this.productos.concat(respuesta.products);
    })
  }
  
}

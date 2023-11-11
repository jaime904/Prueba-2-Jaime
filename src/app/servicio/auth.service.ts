import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import{ BehaviorSubject,delay } from'rxjs';
import { Router } from '@angular/router';
import { UsuarioLogeado } from '../modelo/UsuarioLogeado';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //observador cargando
  private cargando: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public $cargando = this.cargando.asObservable();
  //observador usuarioLogeado
  private usuarioActivo: BehaviorSubject<UsuarioLogeado | null > = new BehaviorSubject<UsuarioLogeado | null>(null);
  public $usuarioActivo = this.usuarioActivo.asObservable();
  private readonly URL_login = "https://dummyjson.com/auth/login"
  constructor(
    private http: HttpClient, 
    private router: Router  
    ) {}
    
  public IntentarLogear(usuario: string, password: string){
    this.cargando.next(true);
    this.http.post<UsuarioLogeado>(this.URL_login,JSON.stringify({
      username: usuario,
      password: password
    }),{
      headers:{ 
        "Content-Type": "application/json"
      }
    }
    ).pipe(delay(2000)).subscribe(resultado => {
      this.usuarioActivo.next(resultado ); 
      this.cargando.next(false);
      this.router.navigate(['/mostrar-login']);
    })
  }
}

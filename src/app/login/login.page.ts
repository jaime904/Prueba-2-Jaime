import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicio/auth.service';
import { FormGroup,FormBuilder,Validators,ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public fomularioLogin: FormGroup;
  constructor(
    public auth:AuthService,
    public formBuilder:FormBuilder
  ) { 
    this.fomularioLogin = formBuilder.group({
      usuario:['',[Validators.required,Validators.minLength(2),Validators.maxLength(13)]],
      password:['',[Validators.required,Validators.minLength(2),Validators.maxLength(13)]]

    }); 
  }

  public intentarLogear(){
    if(!this.fomularioLogin.valid){
      alert("formulario incorrecto:");
      this.fomularioLogin.controls['usuario'].setValue("");
      this.fomularioLogin.controls['password'].setValue("");
      this.fomularioLogin.clearValidators();
      return
    }
    this.auth.IntentarLogear(
      this.fomularioLogin.controls['usuario'].value,
      this.fomularioLogin.controls['password'].value
    );
  }
  ngOnInit() {
  }

}

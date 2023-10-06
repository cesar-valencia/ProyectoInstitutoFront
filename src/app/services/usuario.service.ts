import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interfaces';
import { LoginForm } from '../interfaces/login-form.interfaces';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {  

  constructor( private http: HttpClient) { }

  crearUsuario(formData:RegisterForm){
    console.log('creando Usuario...');
    return this.http.post(`${ base_url}/usuarios`,formData);
  }

  login(formData:any){
    console.log('creando Usuario...');
    return this.http.post(`${ base_url}/Token`,formData)
    .pipe(
      tap((resp:any)=>{        
        localStorage.setItem('token',resp.token)
      })
    );
  }

}

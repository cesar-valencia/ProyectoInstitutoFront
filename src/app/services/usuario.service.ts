import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { RegisterForm } from '../interfaces/register-form.interfaces';
import { LoginForm } from '../interfaces/login-form.interfaces';

const base_url = environment.base_url_autenticacion;

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  menu: any[] = [
    {
      titulo: 'Inicio',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ],
    },
    {
      titulo: 'Usuarios App',
      icono: 'mdi mdi-wrench',
      submenu: [
        { titulo: 'Main', url: '/' },
        { titulo: 'Promesas', url: 'promesas' },
        { titulo: 'ProgressBar', url: 'progress' },
        { titulo: 'Graficas', url: 'grafica1' },
        { titulo: 'Rxjs', url: 'rxjs' },
      ],
    },
  ];

  constructor(private http: HttpClient) {}

  crearUsuario(formData: RegisterForm) {
    console.log('creando Usuario...');
    return this.http.post(`${base_url}/usuarios`, formData);
  }

  login(formData: any) {
    console.log('Verificando Usuario...');
    return this.http.post(`${base_url}/Token`, formData).pipe(
      tap((resp: any) => {
        localStorage.setItem('token', resp.data.token);
        this.menu = resp.data.menu;
      })
    );
  }
}

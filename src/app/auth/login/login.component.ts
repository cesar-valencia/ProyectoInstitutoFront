import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  public formSubmitted: boolean = false;

  public loginForm = this.fb.group({
    user: [localStorage.getItem('user') || "", Validators.required],
    password: ['AdminCesar2011*', Validators.required],
    remember: [false]
  });

  constructor(private router: Router, private fb: FormBuilder, private usuarioService: UsuarioService) {

  }

  login() {

    this.formSubmitted = true;
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      console.log('formulario invalido')
      return
    }

    this.usuarioService.login(this.loginForm.value)
      .subscribe(resp => {
        console.log('Enviado: ' + this.loginForm.value)
        if (this.loginForm.get('remember').value) {
          localStorage.setItem('user', this.loginForm.get('user').value)
        } else {
          localStorage.removeItem('user')
        }

        console.log('usuario autenticado')
        console.log(resp);
        // Swal.fire('Error', resp.toString(), 'error')
        this.router.navigateByUrl('/');
      }, (err) => {
        Swal.fire('Error', err.error.msg, 'error')
        console.warn({err})
      }
      );


  }



}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';

import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public formSubmitted: boolean = false;

  public loginForm = this.fb.group({
    user: [localStorage.getItem('user') || '', Validators.required],
    password: ['AdminCesar2011*', Validators.required],
    remember: [false],
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private usuarioService: UsuarioService
  ) {}

  campoNoValido(campo: string): boolean {
    if (this.loginForm.get(campo)?.invalid && this.formSubmitted) {
      return true;
    } else {
      return false;
    }
  }

  login() {
    this.formSubmitted = true;
    console.log(this.loginForm.value);

    if (this.loginForm.invalid) {
      console.log('formulario invalido');
      return;
    }

    this.usuarioService.login(this.loginForm.value).subscribe(
      (resp) => {
        console.log('Enviado: ' + this.loginForm.value);
        if (this.loginForm.get('remember').value) {
          localStorage.setItem('user', this.loginForm.get('user').value);
        } else {
          localStorage.removeItem('user');
        }

        if (resp.meta.resultadoExitoso) {
          console.log('usuario autenticado');
          this.router.navigateByUrl('/dashboard');
        } else {
          Swal.fire('Usuario o contraseña invalida', '', 'error');
        }
        // console.log(resp);
        // Swal.fire('Error', resp.toString(), 'error')
      },
      (err) => {
        if (err.status == 0) {
          Swal.fire('Error de Conexión :', err.url, 'error');
        }
        console.warn({ err });
      }
    );
  }
}

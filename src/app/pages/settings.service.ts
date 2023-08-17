import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SettingsService {

  private linkTheme = document.querySelector('#theme');

  constructor() { 
    const url = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css';    
    this.linkTheme?.setAttribute('href',url);  
  }

  changeTheme( theme: string){ 
    
    const url = `./assets/css/colors/${theme}.css`; 
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){   

    // pilas no se debería de hacer de esa manera porque saltamos al DOM
    // Pero no es tan costoso porque son pocos elementos
    const links = document.querySelectorAll('.selector');

    links.forEach( elem =>{
       elem.classList.remove('working');
       const btnTheme = elem.getAttribute('data-theme') ;
       const btnThemeUrl = `./assets/css/colors/${ btnTheme }.css`;
       const currentThme = this.linkTheme?.getAttribute('href');

       if(btnThemeUrl===currentThme){
        elem.classList.add('working');
       }

    })

  }

}

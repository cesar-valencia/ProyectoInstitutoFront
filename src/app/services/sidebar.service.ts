import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] =[
    {
      titulo:'',
      icono:'mdi mdi-gauge',
      submenu:[
        {titulo:'Main',url:'/'},
        {titulo:'Promesas',url:'promesas'},
        {titulo:'ProgressBar',url:'progress'},
        {titulo:'Graficas',url:'grafica1'},
        {titulo:'Rxjs',url:'rxjs'}
        
      ]
    }
  ];

  constructor() { }
}

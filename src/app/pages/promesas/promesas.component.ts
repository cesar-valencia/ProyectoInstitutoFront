import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})


export class PromesasComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
    
    this.getUsuarios().then(
      usuarios=>{
        console.log(usuarios)
      }
    );
    
  }

  EntenderPromesas(){
    // forma para entender las promesas en Javascript pero no es la forma más común de usar.
    const promesa = new Promise(
      (resolve,reject) => {
        if(false){
          resolve('Hola Mundo');
        }
        else{
          reject('Algo salió mal');
        }        
      });

    promesa
    .then(
      (mensaje) => {
        console.log(mensaje);
      }
    )
    .catch(
      error=>console.log('error en mi promesa',error)
    );
  }

  getUsuarios(){

    // se puede cambiar const promesa = 
    // para quitar el return al final y simplificar la promesa
     return new Promise(
      resolve =>{
        fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(resp=>resp.json())
        .then(body=>resolve(body.game_indices));
      }      
    );
  }



}

import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription, filter, interval, map, retry, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})

export class RxjsComponent implements OnDestroy{

  public intervalSubs: Subscription;

  constructor(){   
  
    /* Ejemplo Rxjs observable y retry
    this.retornaObservable()
    .pipe(
      retry(2) // realiza un reintento 2 veces antes de lanzar el subscribe
    )
    .subscribe(
      valor=> console.log("Subs",valor),
      error => console.warn('Error',error),
      ()=>console.info('Obs terminado')
    );
    */

    this.intervalSubs = this.retornaIntervalo()
    .subscribe(
      (valor)=>console.log(valor)
    )
  }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo():Observable<number>{
    // maneja intervalos de tiempo
    return interval(1000).pipe(
      // filtrar informacion
      map( valor => valor + 1),
      // emitir un valor de manera condicional
      filter(valor =>(valor % 2 ===0)?true:false),
      // cuantas emisiones del observable se necesitan
      // take(4),
      
    );
  }

  retornaObservable(){

    return new Observable<number>( observer =>{
      let i =-1;

    const intervalo = setInterval(()=>{
      console.log('tick');      
      i++;
      // para notificar a todas las personas que están susbcritas
      observer.next(i);

      if(i===2){
        i=0;
        clearInterval(intervalo);
        observer.error("i llegó al valor de  2")
      }

      if(i===4){
        clearInterval(intervalo);
        // para notificar que el observable debe terminar
        observer.complete();
      }

    },1000)
    }); 
  }

   
}

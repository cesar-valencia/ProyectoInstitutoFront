import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { Subscription, filter, map } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html'
})

export class BreadcrumbsComponent implements OnDestroy{

  public titulo: string="";
  public tituloSub$ :Subscription;

  constructor(private router: Router) {

    this.tituloSub$ = this.getArgumentosRuta()
      .subscribe(        
        ({ titulo }) => {
        this.titulo = titulo;
      }      
      );
  }

  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),      
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      );
  }
}

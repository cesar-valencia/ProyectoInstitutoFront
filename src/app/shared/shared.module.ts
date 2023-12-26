import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { SidebarService } from '../services/sidebar.service';
import { GenericBarComponent } from './generic-bar/generic-bar.component';
import { OperationsComponent } from './operations/operations.component';

@NgModule({
  declarations: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    GenericBarComponent,
    OperationsComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    GenericBarComponent,
    OperationsComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}

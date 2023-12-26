import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';
import { ScpRoutingModule } from './scp/scp.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { SipRoutingModule } from './sip/sip.routing';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'modulos', redirectTo: '/modulos', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
    ScpRoutingModule,
    SipRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

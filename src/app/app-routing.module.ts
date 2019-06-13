
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent } from './component/accueil/accueil.component';
import { AproposComponent } from './component/apropos/apropos.component';
import { ContactComponent } from './component/contact/contact.component';

const routes: Routes = [
    {
        path: 'accueil',
        component: AccueilComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'apropos',
        component: AproposComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
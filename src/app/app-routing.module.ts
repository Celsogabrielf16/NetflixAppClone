import { DetalhesminiComponent } from './components/detalhesmini/detalhesmini.component';
import { FooterComponent } from './components/footer/footer.component';


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'detalhesfull/:indice',
    component: DetalhesComponent,
  },
  {
    path: 'detalhesmini/:indice',
    component: DetalhesminiComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

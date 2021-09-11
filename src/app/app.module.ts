import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopoComponent } from './components/topo/topo.component';
import { ListaComponent } from './components/lista/lista.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { DetalhesminiComponent } from './components/detalhesmini/detalhesmini.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    ListaComponent,
    FooterComponent,
    HomeComponent,
    DetalhesComponent,
    DetalhesminiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

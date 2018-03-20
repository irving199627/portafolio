import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { app_routing }  from "./app.routes";

// Servicios
import {InformacionService}  from "./services/informacion.service";
import { ProductosService } from "./services/productos.service";

// Componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HttpModule } from "@angular/http";
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ProductosComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [InformacionService, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }

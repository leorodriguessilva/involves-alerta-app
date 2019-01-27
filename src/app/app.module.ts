import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AlertasComponent } from './alertas/alertas.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { FiltroPontoDeVendaPipe } from './filtropontodevenda.pipe';
import { FiltroTipoPipe } from './filtrotipo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorComponent,
    AlertasComponent,
    DetalheComponent,
    FiltroPontoDeVendaPipe,
    FiltroTipoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

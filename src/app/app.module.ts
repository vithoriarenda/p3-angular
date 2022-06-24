import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { VithoriahomeComponent } from './vithoriahome/vithoriahome.component';
import { VithorialistComponent } from './vithorialist/vithorialist.component';
import { VithoriastartComponent } from './vithoriastart/vithoriastart.component';
import { VithorialistService } from './vithorialist.service';

@NgModule({
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'vithoriahome', component: VithoriahomeComponent },
      { path: 'vithorialist', component: VithorialistComponent },
      { path: 'vithoriastart', component: VithoriastartComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    VithoriahomeComponent,
    VithorialistComponent,
    VithoriastartComponent,
  ],
  providers: [VithorialistService, Http],
  bootstrap: [AppComponent],
})
export class AppModule {}

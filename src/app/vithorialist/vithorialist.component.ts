import { NgModule, Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import { VithorialistService } from '../vithorialist.service';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-vithorialist',
  templateUrl: './vithorialist.component.html',
  styleUrls: ['./vithorialist.component.css'],
})
export class VithorialistComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}
}

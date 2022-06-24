import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { NgModule, Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Injectable()
export class VithorialistService {
  apiRoot: string = 'http://httpbin.org';
  constructor(private http: HttpClient) {}
  doGET() {
    console.log('GET');
    let url = '${this.apiRoot}/get';
    const httpOptions = {
      params: new HttpParams().set('foo', 'moo').set('limit', '25'),
    };
    this.http.get(url, httpOptions).subscribe((res) => console.log(res));
  }
}

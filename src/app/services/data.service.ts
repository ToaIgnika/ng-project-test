import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
const URLpath = "http://localhost:4200/assets/data/mockresources.json"

@Injectable({
  providedIn: 'root'
})


export class DataService {


  constructor(private http: HttpClient) { }


  
  getData(): Observable<any> {
    var config = {
      headers: {
        "Content-Type": "application/json; charset = utf-8;"
      }
    };
    return this.http.get<any>(URLpath, config);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Services are good as they can be used to call APIs and such, to get this go to the CLA and type ng g s NAME

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries') //This is the API being called, This mean, thisFunction.GoOnTheInternet.AndGet('The API from this link')
  }
}

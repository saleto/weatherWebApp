import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { 
    
  }

  getWeather(location){
    return this.http.get(
      environment.baseUrl + environment.access_key + environment.queryLocation + location
    );
}
}

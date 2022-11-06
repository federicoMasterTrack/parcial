import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Planta } from './Planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {
  private apiUrl: string = `${environment.baseUrl}`;
  constructor(private http: HttpClient) { }

  getPlatas():Observable<Planta[]>{
    return this.http.get<Planta[]>(this.apiUrl);
  }
}

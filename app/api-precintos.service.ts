import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Precinto } from './precinto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPrecintosService {

  constructor(private http:HttpClient) { }

  public getPrecintos():Observable<Precinto[]> {
    return  this.http.get<Precinto[]>
                    ('http://apiuser.azurewebsites.net/api/usuarios');
  }

}

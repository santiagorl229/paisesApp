import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlCity: string ='https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{ 
    const url= `${this.apiUrl}/name/${termino}`;
    console.log(url);
    return this.http.get<Country[]>(url);
  }
  buscarCapital(termino: string):Observable<Country[]>{
    const apiUrlCity = `${this.apiUrlCity}/capital/${termino}`;
    return this.http.get<Country[]>(apiUrlCity);
  }
  getPaisPorAlpha(id:string):Observable<Country>{
    const url= `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}

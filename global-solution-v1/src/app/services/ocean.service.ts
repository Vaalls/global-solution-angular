import { HttpClient, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocean } from '../interface/ocean';

@Injectable({
  providedIn: 'root',
})
export class OceanService {
  constructor(private http: HttpClient) {}

  API = 'https://fiap-3sis-gs-20241.azurewebsites.net/OceanData';

  getOceans(pagina = 1, qtde = 20): Observable<Ocean[]> {
    const parametros: HttpParams = new HttpParams()
      .set('pagina', pagina)
      .set('qtde', qtde);

    return this.http.get(this.API, { params: parametros }) as Observable<
      Ocean[]
    >;
  }
}

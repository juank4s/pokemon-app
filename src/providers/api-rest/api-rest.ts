import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, timeout} from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';



/*
  Generated class for the ApiRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiRestProvider {

  contentHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private serverURL = environment.serverUrl;


  constructor(public http: HttpClient) {
  }


   public getModelWA(path): Observable<any> {
    return this.http.get<any>(`${this.serverURL}${path}`, {});
  }

  /**
   * Configuración de Headers para servicio que no necessitan autenticación
   */
  async configBasicHeader() {
    this.contentHeaders.headers = await new HttpHeaders({});
    this.contentHeaders.headers = await this.contentHeaders.headers.append('Content-Type', 'application/json');
  }



}

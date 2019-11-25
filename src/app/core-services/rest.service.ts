import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService<T> {

  constructor(private http: HttpClient) {

   }

   public getData(basepath: string, endpoint : string, contenType : string, id: string):Observable<T>{
    let params = new HttpParams();
    let headers = new HttpHeaders();
    let endPoint: string;
    headers = headers.append('Content-Type', contenType);
    headers = headers.set("Accept", contenType);
    endPoint = id ?   basepath.concat(endpoint).concat('/').concat(id) : basepath.concat(endpoint);
       return this.http.get<T>(endPoint,{headers : headers , params : params});
    
   }
}

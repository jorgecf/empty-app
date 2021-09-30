import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from './app/models/status-response';
import { IApiService } from './app/models/iapi-client';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements IApiService {

  //  public headers: HttpHeaders;

  constructor(
    private http: HttpClient
  ) {

  }

  public getAllGlovers(): Observable<any> {
    return this.http
      .get("https://crud-challenge.herokuapp.com/glovers",
        {
          headers: {
            "interview-id": "interview-unique-id"
          }
        });
  }

  public addNewGlover(newGloverName: string): Observable<Status> {
    return this.http
      .post<Status>("https://crud-challenge.herokuapp.com/glovers",
        { "name": newGloverName },
        {
          headers: {
            "interview-id": "interview-unique-id",
            "Content-Type": "application/json"
          }
        }
      );
  }

  public removeGlover(gloverId: number): Observable<Status> {
    return this.http
      .delete<Status>(`https://crud-challenge.herokuapp.com/glovers/${gloverId}`,
        {
          headers: {
            "interview-id": "interview-unique-id"
          }
        })
  }


}

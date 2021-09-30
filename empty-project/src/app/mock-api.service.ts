import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IApiService } from './models/iapi-client';
import { Status } from './models/status-response';

@Injectable({
  providedIn: 'root'
})
export class MockApiService implements IApiService {

  constructor() { }
  getAllGlovers(): Observable<any> {
    return of({
      "237128737": {
        "name": "Joe Bloggs",
        "id": 237128737
      },
      "230000000": {
        "name": "David Zuckerberg",
        "id": 230000000
      }
    });
  }
  addNewGlover(newGloverName: string): Observable<Status> {
    return of({ status: "ok" });
  }
  removeGlover(gloverId: number): Observable<Status> {
    return of({ status: "ok" });
  }
}

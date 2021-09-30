import { Observable } from "rxjs";
import { Status } from "./status-response";

export interface IApiService {
    getAllGlovers(): Observable<any>;
    addNewGlover(newGloverName: string): Observable<Status>;
    removeGlover(gloverId: number): Observable<Status>;
}
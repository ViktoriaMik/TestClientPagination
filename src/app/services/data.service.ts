import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {dataUrl} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {IData} from "../models/data";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient) {
  }

  public getData(): Observable<IData[]> {
    return this.httpClient.get<IData[]>(dataUrl)
  }
}

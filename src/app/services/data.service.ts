import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {dataUrl} from "../../environments/environment.prod";
import {Observable} from "rxjs";
import {IData} from "../models/data";
import {map} from "rxjs/operators";
import {tsCastToAny} from "@angular/compiler-cli/src/ngtsc/typecheck/src/ts_util";

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private httpClient: HttpClient) {
  }

  public getData(page: number, itemsPerPage: number): Observable<IData[]> {
    let data = this.httpClient.get<IData[]>(dataUrl)

    return   this.getDataItems(data, page, itemsPerPage)
  }

  getDataItems(data: any, page: number, itemsPerPage: number): any {
    return data.pipe(
      map((item:IData[]) => {
        let startIndex=itemsPerPage*(page-1)
        return( (item.slice(startIndex,startIndex+itemsPerPage)))

      })
    )
  }
}

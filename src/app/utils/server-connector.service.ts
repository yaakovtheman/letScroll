import {Http, URLSearchParams} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
@Injectable()
export class ServerConnector{
  constructor(private http:Http){}

  public getData(url: string,params?: URLSearchParams): Observable<any>{
    if(params){
      return this.http.get(url,{search: params}).map(
        response => response.json()).catch(this.handleError);
      }else {
      return this.http.get(url).map(
        response => response.json()).catch(this.handleError);
    }
  }

  private handleError(error : any): Observable<any>{
    return Observable.throw(error.messages || error);
  }
}

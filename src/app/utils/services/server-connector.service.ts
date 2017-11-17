import {Http, URLSearchParams, RequestOptions, Headers} from "@angular/http";
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

  public postData(url: string, body: any): Observable<any> {
    console.log(JSON.stringify(body));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url,JSON.stringify(body), options).map(
      response => response.json()).catch(this.handleError);
  }

  private handleError(error : any): Observable<any>{
    return Observable.throw(error.messages || error);
  }
}

import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';


@Injectable()
export class HttpService {


  constructor(private http: Http) { }

  baseUrl = "http://localhost:4001/";
  async getJson(url): Promise<any> {
    const serverRoute = `${this.baseUrl}${url}`
    try {
      const response = await this.http.get(serverRoute).toPromise();
      return {
        data: response.json(),
        success: true
      };
    }
    catch (e) {
      debugger;
      return {
        data: null,
        success: false
      };
    }
  }

}

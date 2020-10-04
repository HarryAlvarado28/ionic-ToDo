import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ItemsService {
  constructor(private _httpClient: HttpClient) {}
  // urlBase = "https://restcountries.eu/rest/";
  urlLambda= "https://kql85v0rw3.execute-api.us-east-1.amazonaws.com/dev/";
  urlBase = "./../../assets/listData.json";
  // listData = [
  //   { id: 1, name: "Uno" },
  //   { id: 2, name: "Dos" },
  //   { id: 3, name: "Tres" },
  //   { id: 4, name: "Cuatro" },
  //   { id: 5, name: "Cinco" },
  // ];

  getList() {
   // let url = this.urlBase + "v2/alpha/" + "pan";
   let url = this.urlLambda+"getAll"; //"v2/alpha/" + "pan";
    return this._httpClient.get(url);
  }

  postItem(item) {
    let url = this.urlLambda+"agregar"; //"v2/alpha/" + "pan";
    console.log("urlll",url,"item",item);
    return this._httpClient.post(url, item);
  }

  putItem(item) {
    let url = this.urlBase + "v2/alpha/" + "pan";
    return this._httpClient.put(url, item);
  }

  deleteItem(item) {
    let url = this.urlBase + "v2/alpha/" + "pan";
    return this._httpClient.delete(url);
  }
}

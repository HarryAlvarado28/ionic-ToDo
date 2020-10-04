import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemsService } from "../service/items.service";
import {
  InterfaceItem
} from 'src/app/model/item.model';
import { cleanSession } from 'selenium-webdriver/safari';

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {

item:InterfaceItem={
  ID: '',
  NOMBRE: '',
};
  constructor(private serviceItem: ItemsService) {
    serviceItem.getList().subscribe((r) => {
      console.log("Lista Dynamo-> ", r);
    });
  }

  name = new FormControl("");

  list = [];

  add(item) {
    this.item.NOMBRE=this.name.value;
    console.log("objeto item",this.item);
    console.log("POST--> ", item, "NAME->", this.item.NOMBRE);
    this.serviceItem.postItem(this.item).subscribe((r)=>{
      console.log("r",r);
    });
  }
  update(item) {
    console.log("PUT--> ", item);
    this.serviceItem.putItem(item);
  }
  remove(item) {
    console.log("DELETE--> ", item);
    this.serviceItem.deleteItem(item);
  }
}

interface item {
  id: string;
  name: string;
}

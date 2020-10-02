import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ItemsService } from "../service/items.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private serviceItem: ItemsService) {
    serviceItem.getList().subscribe((r) => {
      console.log("LOL-> ", r);
    });
  }

  name = new FormControl("");

  list = [];

  add(item) {
    console.log("POST--> ", item, "NAME->", this.name.value);
    this.serviceItem.postItem(name);
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

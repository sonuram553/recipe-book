import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"]
})
export class AppComponent {
  activeMenuLink: string = "recipe";

  onMenuChanged(event) {
    this.activeMenuLink=event;
  }
}

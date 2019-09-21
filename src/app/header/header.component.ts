import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  activeLink: string="recipe";
  @Output() menuChanged = new EventEmitter<string>();
  constructor() {}
  ngOnInit() {}

  onSelect(link: string) {
    this.activeLink = link;
    this.menuChanged.emit(link);
  }
}

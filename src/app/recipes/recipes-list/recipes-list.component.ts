import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "Bread Cake",
      "This is a cake",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg"
    )
  ];

  constructor() {}

  ngOnInit() {}
}

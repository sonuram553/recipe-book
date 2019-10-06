import { Component, OnInit, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipes-item",
  templateUrl: "./recipes-item.component.html",
  styleUrls: ["./recipes-item.component.scss"]
})
export class RecipesItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Input() index: number;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  shortenDescription() {
    if (this.recipeItem.description.length > 50)
      return this.recipeItem.description.slice(0, 50) + "...";
    return this.recipeItem.description;
  }
}

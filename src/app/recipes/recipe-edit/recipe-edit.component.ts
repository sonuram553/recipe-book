import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"]
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  selectedRecipe: Recipe;
  constructor(
    private activeRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.id = +params["id"];
      this.editMode = params["id"] !== null;
    });

    if (this.editMode) {
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    }
  }
}

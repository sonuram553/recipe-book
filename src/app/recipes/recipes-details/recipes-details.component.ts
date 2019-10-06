import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";

@Component({
  selector: "app-recipes-details",
  templateUrl: "./recipes-details.component.html",
  styleUrls: ["./recipes-details.component.scss"]
})
export class RecipesDetailsComponent implements OnInit {
  selectedRecipe: Recipe;
  index:number;
  constructor(
    private recipeService: RecipeService,
    private shoppingService: ShoppingListService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      this.index= +params["id"];
      this.selectedRecipe=this.recipeService.recipes[this.index];
    });
  }

  addToShoppingList() {
    this.shoppingService.addMultipleIngredients(
      this.selectedRecipe.ingredients
    );
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.index);
    this.router.navigate([".."], { relativeTo: this.activeRoute });
  }
}

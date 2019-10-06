import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { Router, ActivatedRoute } from "@angular/router";
import { RecipeService } from '../recipe.service';

@Component({
  selector: "app-recipes-list",
  templateUrl: "./recipes-list.component.html",
  styleUrls: ["./recipes-list.component.scss"]
})
export class RecipesListComponent implements OnInit {
  recipes:Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.recipes=this.recipeService.recipes;
  }

  onCreateNewRecipe() {
    this.router.navigate(["new"], { relativeTo: this.activeRoute });
  }
}

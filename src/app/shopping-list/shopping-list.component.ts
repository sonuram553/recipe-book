import {
  Component,
  OnInit,
  OnDestroy,
} from "@angular/core";

import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.scss"]
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  private subs: Subscription;
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subs = this.shoppingListService.ingredientChanged.subscribe(() => {
      this.ingredients = this.shoppingListService.getIngredients();
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

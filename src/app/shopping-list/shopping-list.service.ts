import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ShoppingListService {
  ingredientChanged = new Subject<void>();
  updateIngredient = new Subject<number>();
  activeIngredient = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 4),
    new Ingredient("Potatoes", 10),
    new Ingredient("Garlic", 4)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(newIngredient: Ingredient, index: number = -1) {
    if (index === -1) this.ingredients.push(newIngredient);
    else this.ingredients[index] = newIngredient;
    this.ingredientChanged.next();
  }

  addMultipleIngredients(ingredientsList: Ingredient[]) {
    this.ingredients.push(...ingredientsList);
    this.ingredientChanged.next();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientChanged.next();
  }
}

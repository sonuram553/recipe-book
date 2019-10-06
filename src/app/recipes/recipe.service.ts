import { Injectable, OnInit } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable({
  providedIn: "root"
})
export class RecipeService {
  recipes: Recipe[] = [
    {
      name: "Shahi Paneer",
      description:
        "Shahi Paneer is considered to be a mainstay dish especially in the Northern parts of India. Shahi which means 'Royal' and Paneer when translated is ' Cottage Cheese' gives Shahi Paneer a royal feel to it.",
      imagePath:
        "https://upload.wikimedia.org/wikipedia/commons/6/6b/Matar_Panir_mit_Chapati_-_Mutter_Paneer_with_chapati.jpg",
      ingredients: [
        { name: "Tomato", amount: 5 },
        { name: "Paneer", amount: 10 }
      ]
    },
    {
      name: "Butter Chicken",
      description:
        "Butter Chicken, a non-vegetarian delicacy is one of the most popular dishes not only in India but also other parts of the world.",
      imagePath:
        "https://live.staticflickr.com/65535/46722861535_0408e600e1_b.jpg",
      ingredients: [
        { name: "Chicken", amount: 5 },
        { name: "Onion", amount: 10 }
      ]
    },
    {
      name: "Motichoor Ladoo",
      description:
        "Ladoos are the most popular Indian sweet dish. No festival or occasion can be considered to be complete without ladoos.",
      imagePath:
"https://upload.wikimedia.org/wikipedia/commons/c/ca/Motichur_ka_laddu.JPG",      ingredients: [
        { name: "Boondi", amount: 10 },
        { name: "Sugar", amount: 9 }
      ]
    }
  ];

  updateRecipe(newRecipe: Recipe, index: number = -1) {
    if (index === -1) {
      this.recipes.push(newRecipe);
    } else this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}

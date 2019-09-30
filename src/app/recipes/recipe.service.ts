import { Recipe } from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      "Bread Cake",
      "This is a cake",
      "https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg",
      [{ name: "Apple", amount: 4 }, { name: "Guava", amount: 4 }]
    ),
    new Recipe(
      "Chicken",
      "This is a chicken recipe",
      "https://www.publicdomainpictures.net/pictures/300000/velka/chicken-drumsticks.jpg",
      [{ name: "Orange", amount: 4 }, { name: "Banana", amount: 4 }]
    )
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
}

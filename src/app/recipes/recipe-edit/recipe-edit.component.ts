import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";

import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.scss"]
})
export class RecipeEditComponent implements OnInit {
  recipeForm: FormGroup;
  index: number;
  editMode = false;
  selectedRecipe: Recipe;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    let id = this.activeRoute.snapshot.params.id;
    //console.log("Recipe edit index", id);
    
    if (id) {
      this.index = +id;
      this.editMode = true;
      this.selectedRecipe = this.recipeService.recipes[this.index];

    }
    this.initForm();
  }

  private initForm() {
    let Name = "",
      Description = "",
      ImagePath = "",
      Ingredients = new FormArray([]);

    if (this.editMode) {
      Name = this.selectedRecipe.name;
      Description = this.selectedRecipe.description;
      ImagePath = this.selectedRecipe.imagePath;

      if (this.selectedRecipe.ingredients) {
        for (let ingredient of this.selectedRecipe.ingredients) {
          Ingredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(`^[1-9]+[0-9]*$`)
              ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(Name, Validators.required),
      description: new FormControl(Description, Validators.required),
      imagePath: new FormControl(ImagePath, Validators.required),
      ingredients: Ingredients
    });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get("ingredients")).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(`^[1-9]+[0-9]*$`)
        ])
      })
    );
    console.log(this.recipeForm.get("ingredients"));
  }

  getControls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get("ingredients")).removeAt(index);
    console.log(this.recipeForm.get("ingredients"));
  }

  onSave() {
    if (this.editMode) {
      this.recipeService.updateRecipe(this.recipeForm.value, this.index);
    } else this.recipeService.updateRecipe(this.recipeForm.value);

    this.router.navigate([".."], { relativeTo: this.activeRoute });
    console.log(this.recipeForm.value);
  }

  onCancel() {
    this.router.navigate([".."], { relativeTo: this.activeRoute });
  }
}

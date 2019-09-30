import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  AfterViewInit
} from "@angular/core";
import { ShoppingListService } from "../shopping-list.service";
import { FormGroup, NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
  selector: "app-shopping-edit",
  templateUrl: "./shopping-edit.component.html",
  styleUrls: ["./shopping-edit.component.scss"]
})
export class ShoppingEditComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild("form", { static: false }) myForm: NgForm;
  private subs: Subscription;

  editMode = false;
  editIngredient: Ingredient;
  editIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subs = this.shoppingListService.updateIngredient.subscribe(
      (index: number) => {
        this.editIndex = index;
        this.editMode = true;
        this.editIngredient = this.shoppingListService.getIngredient(index);
        this.myForm.setValue({
          name: this.editIngredient.name,
          amount: this.editIngredient.amount
        });
      }
    );
  }

  ngDoCheck() {}

  onAddIngredient() {
    const value = this.myForm.value;
    const newIngredient = { name: value.name, amount: +value.amount };

    if (this.editMode) {
      this.editMode = false;
      this.shoppingListService.addIngredient(newIngredient, this.editIndex);
    }
    else this.shoppingListService.addIngredient(newIngredient)
    this.myForm.reset();
  }

  ngAfterViewInit() {}
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}

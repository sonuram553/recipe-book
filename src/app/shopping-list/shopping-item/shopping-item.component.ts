import { Component, OnInit, Input } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";
import { ShoppingListService } from "../shopping-list.service";

@Component({
  selector: "app-shopping-item",
  templateUrl: "./shopping-item.component.html",
  styleUrls: ["./shopping-item.component.scss"]
})
export class ShoppingItemComponent implements OnInit {
  @Input() ingredient: Ingredient;
  @Input() index: number;
  isActive: boolean = false;
  constructor(private shoppingListService: ShoppingListService) {}

  onEditIngredient(index: number, operation: string) {
    if (operation === "delete")
      this.shoppingListService.deleteIngredient(index);
    else {
      this.shoppingListService.updateIngredient.next(index);
      this.shoppingListService.activeIngredient.next(index);
    }
  }
  ngOnInit() {
    this.shoppingListService.activeIngredient.subscribe(index => {
      if (index === this.index) this.isActive = true;
      else this.isActive = false;
    });
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    @Output() recipeWasSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe('A Test recipe', 'This is a test', 'https://p0.pikist.com/photos/943/665/kyllingefrikadeller-potatoes-meatballs-recipes-food-pictures-recipe-kyllingefrikadelle.jpg'),
        new Recipe('Another Test recipe', 'This is a test', 'https://p0.pikist.com/photos/943/665/kyllingefrikadeller-potatoes-meatballs-recipes-food-pictures-recipe-kyllingefrikadelle.jpg')
    ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
      this.recipeWasSelected.emit(recipe);
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A test recipy',
      'descr test',
      'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg'
    ),
    new Recipe(
      'A test recipy2',
      'descr test',
      'https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_960_720.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}

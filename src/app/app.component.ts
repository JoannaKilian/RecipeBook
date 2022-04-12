import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadSelected: string = 'recipes';

  onChoseNavigate(select: string) {
    this.loadSelected = select;
    console.log(select);
    console.log(this.loadSelected);
  }
}

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['header.scss'],
})
export class HeaderComponent {
  @Output() selected = new EventEmitter<string>();

  onClick(select: string) {
    this.selected.emit(select);
  }
}

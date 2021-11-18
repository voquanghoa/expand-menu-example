import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-expand-menu',
  templateUrl: './expand-menu.component.html',
  styleUrls: ['./expand-menu.component.scss']
})
export class ExpandMenuComponent {
  public expandIndex = -1;
  @Input() public modules: string[] = [];

  public onToggle(index: number) {
    this.expandIndex = (this.expandIndex === index)? -1: index;
  }
}

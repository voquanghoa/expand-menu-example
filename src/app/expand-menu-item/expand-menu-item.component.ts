import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-expand-menu-item',
  templateUrl: './expand-menu-item.component.html',
  styleUrls: ['./expand-menu-item.component.scss']
})
export class ExpandMenuItemComponent {
  @Input() public expanded = false;
  @Input() public title = '';
  @Output() public toggle = new EventEmitter();
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public modules = [
    "Module A",
    "Module B",
    "Module C",
    "Module D",
  ]
}

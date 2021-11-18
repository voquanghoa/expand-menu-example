import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpandMenuItemComponent } from './expand-menu-item/expand-menu-item.component';
import { ExpandMenuComponent } from './expand-menu/expand-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpandMenuItemComponent,
    ExpandMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

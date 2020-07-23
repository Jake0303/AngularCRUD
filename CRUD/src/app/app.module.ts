import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesCreateComponent } from './components/articles-create/articles-create.component';
import { ArticlesUpdateComponent } from './components/articles-update/articles-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesListComponent,
    ArticlesCreateComponent,
    ArticlesUpdateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

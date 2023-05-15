import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ClassextendsComponent } from './classextends/classextends.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    ClassextendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

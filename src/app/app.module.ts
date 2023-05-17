import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { ClassextendsComponent } from './classextends/classextends.component';
import { ObservableComponent } from './observable/observable.component';
import { CustomobservablesComponent } from './customobservables/customobservables.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TypescriptComponent,
    ClassextendsComponent,
    ObservableComponent,
    CustomobservablesComponent,
    EmpInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ButtonFormComponent } from './button-form/button-form.component';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';
import { ButtonComponent } from './home/button/button.component';
import { LabelComponent } from './home/label/label.component';
import { InputComponent } from './home/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    GrandChildComponent,
    ParentFormComponent,
    ButtonFormComponent,
    HomeComponent,
    SubmitComponent,
    ButtonComponent,
    LabelComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

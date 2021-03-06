import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassSampleComponent } from './class-sample/class-sample.component';
import { IOComponent } from './io/io.component';
import { DataComponent } from './data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassSampleComponent,
    IOComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

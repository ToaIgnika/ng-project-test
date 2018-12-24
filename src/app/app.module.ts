import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FlexLayoutModule} from '@angular/flex-layout'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CloudResourcesComponent } from './cloud-resources/cloud-resources.component'

@NgModule({
  declarations: [
    AppComponent,
    CloudResourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

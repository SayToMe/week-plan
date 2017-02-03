import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule } from '../../node_modules/ng2-dragula';

import { AppComponent } from './app.component';
import { DayPlanComponent } from './day-plan/day-plan.component';

import { PlanStorageService } from './services/plan-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    DayPlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [PlanStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

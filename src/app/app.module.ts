import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { DayPlanComponent } from './day-plan/day-plan.component';

import { PlanStorageService } from './services/plan-storage.service';
import { DragulaService } from 'ng2-dragula';

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
  providers: [PlanStorageService, DragulaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

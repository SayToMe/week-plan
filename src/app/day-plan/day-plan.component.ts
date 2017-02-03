import { PlanStorageService, IDayPlan, IActivity } from './../services/plan-storage.service';
import { Component, OnInit, Input } from '@angular/core';
import { DragulaService } from '../../../node_modules/ng2-dragula';

@Component({
  selector: 'app-day-plan',
  templateUrl: './day-plan.component.html',
  styleUrls: ['./day-plan.component.css']
})
export class DayPlanComponent implements OnInit {
  @Input()
  weekDay: string;

  dayPlan: IDayPlan;
  newActivityName = '';

  isDragging = false;

  dragulaOptions = {
    removeOnSpill: true,
    ignoreInputTextSelection: false,
    moves: (el, source, handle, sibling) => {
      return !el.classList.contains('new-plan-activity');
    }
  };

  constructor(private dragulaService: DragulaService, private planStorageService: PlanStorageService) {
  }

  ngOnInit() {
    this.dayPlan = this.planStorageService.getDayPlan(this.weekDay);

    this.dragulaService.drag.asObservable().subscribe((val) => {
      this.isDragging = true;
    });

    this.dragulaService.dragend.asObservable().subscribe((val) => {
      this.isDragging = false;

      this.updateDayPlan();
    });
  }

  addNewActivity() {
    const newActivity = <IActivity>{
      title: this.newActivityName
    };

    this.dayPlan.activities.push(newActivity);
    this.newActivityName = '';

    this.save();
  }

  updateDayPlan() {
    this.save();
  }

  private save() {
    this.planStorageService.saveDayPlan(this.dayPlan);
  }
}
